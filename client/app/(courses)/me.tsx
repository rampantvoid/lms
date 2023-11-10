import CourseCard from '@components/course-card';
import Loader from '@components/loader';
import useCourses from '@hooks/use-courses';
import Text from '@shared/Text';
import { commonStyles } from '@styles/common';
import { meStyles } from '@styles/me';
import { ScrollView } from 'react-native';

export default function Me() {
  const { courses } = useCourses();

  if (!courses) {
    return <Loader />;
  }
  const isEmpty = courses.length === 0;

  return (
    <ScrollView
      style={meStyles.container}
      overScrollMode='never'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        rowGap: 20,
        padding: 20,
        paddingBottom: 20,
      }}
    >
      {!isEmpty ? (
        courses.map((course) => <CourseCard course={course} key={course.id} />)
      ) : (
        <Text style={commonStyles.nothing}>
          You have not enrolled in any course yet!
        </Text>
      )}
    </ScrollView>
  );
}
