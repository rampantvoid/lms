import Loader from '@components/loader';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import useCourses from '@hooks/use-courses';
import Text from '@shared/Text';
import { courseImageProps, courseStyles } from '@styles/course';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Placeholder({ name }: { name?: string }) {
  return (
    <>
      <Stack.Screen
        options={
          name
            ? {
                title: name,
              }
            : {
                headerShown: false,
              }
        }
      />
      <Loader />
    </>
  );
}

export default function CoursePage() {
  const { id } = useLocalSearchParams();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const { addCourse, courses: enrolledCourses, allCourses } = useCourses();

  if (!enrolledCourses || !allCourses) {
    return <Placeholder />;
  }

  const course = allCourses.find((c) => c.id.toString() === id);
  if (!course) return null;

  const thumb = courseImageProps(course.thumbnail);

  const hasEnrolled = enrolledCourses.some(
    (enrolledCourse) => enrolledCourse.id === course.id
  );

  const onPress = async () => {
    setIsEnrolling(true);
    addCourse(course).finally(() => setIsEnrolling(false));
  };

  return (
    <ScrollView
      overScrollMode='never'
      style={courseStyles.container}
      contentContainerStyle={{
        paddingBottom: 30,
      }}
    >
      <Stack.Screen
        options={{
          title: course.name,
        }}
      />
      <SafeAreaView>
        <Image source={thumb.source} style={thumb.style} />

        <SafeAreaView style={courseStyles.titleContainer}>
          <Text style={courseStyles.title}>{course.name}</Text>

          <SafeAreaView
            style={[
              courseStyles.badge,
              course.enrollmentStatus !== 'Open' && {
                backgroundColor: 'red',
              },
            ]}
          >
            <Text style={courseStyles.badgeText}>
              {course.enrollmentStatus}
            </Text>
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={courseStyles.instructorLocationContainer}>
          <FontAwesome name='user' size={12} color='white' />
          <Text style={courseStyles.instructorLocationStyle}>
            {course.instructor}
          </Text>
        </SafeAreaView>

        <SafeAreaView
          style={[
            courseStyles.instructorLocationContainer,
            {
              marginTop: 5,
            },
          ]}
        >
          <FontAwesome5 name='map-marker-alt' size={12} color='white' />
          <Text style={courseStyles.instructorLocationStyle}>
            {course.location}
          </Text>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={courseStyles.field}>
        <Text style={courseStyles.headingSecondary}>Description</Text>

        <Text style={courseStyles.courseText}>{course.description}</Text>
      </SafeAreaView>

      <SafeAreaView style={courseStyles.durationScheduleContainer}>
        <SafeAreaView
          style={{
            gap: 10,
          }}
        >
          <Text style={courseStyles.headingSecondary}>Duration</Text>

          <Text style={courseStyles.courseText}>{course.duration}</Text>
        </SafeAreaView>

        <SafeAreaView
          style={{
            alignItems: 'flex-end',
            gap: 10,
          }}
        >
          <Text style={courseStyles.headingSecondary}>Schedule</Text>

          <Text style={courseStyles.courseText}>{course.schedule}</Text>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={courseStyles.field}>
        <Text style={courseStyles.headingSecondary}>Prerequisites</Text>

        <Text style={courseStyles.courseText}>
          {course.prerequisites.map((p, i) => {
            return `${i + 1}. ${p}${
              i === course.prerequisites.length - 1 ? '' : '\n'
            }`;
          })}
        </Text>
      </SafeAreaView>

      <SafeAreaView style={courseStyles.syllabusContainer}>
        <Text style={[courseStyles.headingSecondary, { textAlign: 'center' }]}>
          Syllabus
        </Text>

        <SafeAreaView>
          {course.syllabus.map((item, index) => (
            <SafeAreaView
              key={index}
              style={{
                gap: 10,
                marginBottom: index === course.syllabus.length - 1 ? 0 : 20,
              }}
            >
              <Text
                style={[
                  courseStyles.headingSecondary,
                  {
                    textDecorationLine: 'none',
                  },
                ]}
              >
                {item.week}
                {item.week === 1 ? 'st' : 'nd'} Week
              </Text>

              <Text style={courseStyles.topicText}>
                Topic - {item.topic}
                {'\n\n'}
                Content - {item.content}
              </Text>
            </SafeAreaView>
          ))}
        </SafeAreaView>
      </SafeAreaView>

      <TouchableOpacity
        style={[
          courseStyles.enrollBtn,
          (hasEnrolled ||
            isEnrolling ||
            course.enrollmentStatus !== 'Open') && {
            opacity: 0.4,
          },
        ]}
        onPress={onPress}
        disabled={
          hasEnrolled || isEnrolling || course.enrollmentStatus !== 'Open'
        }
      >
        <Text style={courseStyles.enrollText}>
          {hasEnrolled ? 'Enrolled' : 'Enroll'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
