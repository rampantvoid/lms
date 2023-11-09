import { createContext, useEffect, useState } from 'react';
import { Course } from '../utils/courses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useMemo } from 'react';

interface ICourseContext {
  courses: Course[] | null;
  addCourse: (course: Course) => Promise<boolean>;
}

export const CourseContext = createContext<ICourseContext>({
  courses: null,
  addCourse: () => Promise.resolve(true),
});

const COURSES_KEY = 'enrolled-courses';

export default function CourseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(COURSES_KEY).then(async (val) => {
      if (val === null) {
        await AsyncStorage.setItem(COURSES_KEY, JSON.stringify([]));
        return setCourses([]);
      }

      const parsed = JSON.parse(val) as Course[];
      setCourses(parsed);
    });
  }, []);

  const addCourse = useCallback(
    async (course: Course) => {
      if (courses === null) return false;

      const alreadyEnrolled = courses?.find((c) => c.id === course.id);
      if (alreadyEnrolled) {
        return false;
      }

      await AsyncStorage.setItem(
        COURSES_KEY,
        JSON.stringify([course, ...courses])
      );

      setCourses((prev) => {
        if (prev === null) return null;

        return [course, ...prev];
      });

      return true;
    },
    [courses]
  );

  return (
    <CourseContext.Provider
      value={useMemo(
        () => ({
          courses,
          addCourse,
        }),
        [courses, addCourse]
      )}
    >
      {children}
    </CourseContext.Provider>
  );
}
