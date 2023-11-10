import CourseCard from '@components/course-card';
import Loader from '@components/loader';
import useCourses from '@hooks/use-courses';
import Text from '@shared/Text';
import { commonStyles } from '@styles/common';
import { listingStyles } from '@styles/listing';
import { SafeAreaView, ScrollView } from 'react-native';

export default function Listing() {
  const { allCourses } = useCourses();

  if (!allCourses) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={listingStyles.scrollView}
        overScrollMode='never'
        contentContainerStyle={{
          rowGap: 20,
          padding: 20,
          paddingBottom: 20,
        }}
      >
        {allCourses.length > 0 ? (
          allCourses.map((c, i) => <CourseCard course={c} key={i} />)
        ) : (
          <Text style={commonStyles.nothing}>No courses in our database.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
