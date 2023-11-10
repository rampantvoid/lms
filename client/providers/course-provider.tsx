import { createContext, useEffect, useState } from 'react';
import { Course } from '../utils/courses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useMemo } from 'react';
import { fetchCourses } from '@utils/api';

interface ICourseContext {
  allCourses: Course[] | null;
  courses: Course[] | null;
  addCourse: (course: Course) => Promise<boolean>;
}

export const CourseContext = createContext<ICourseContext>({
  courses: null,
  allCourses: null,
  addCourse: () => Promise.resolve(true),
});

const COURSES_KEY = 'enrolled-courses';

export default function CourseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [courses, setCourses] = useState<Course[] | null>(null);

  // Not handling error state seprately
  // Value null: -> Loading...
  const [allCourses, setAllCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(COURSES_KEY).then(async (val) => {
      if (val === null) {
        await AsyncStorage.setItem(COURSES_KEY, JSON.stringify([]));
        return setCourses([]);
      }

      const parsed = JSON.parse(val) as Course[];
      setCourses(parsed);
    });

    fetchCourses().then((data) => {
      setAllCourses(data);
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
          allCourses,
        }),
        [courses, addCourse, allCourses]
      )}
    >
      {children}
    </CourseContext.Provider>
  );
}
