import { SafeAreaView, ScrollView } from 'react-native';
import CourseCard from '../../components/course-card';
import { commonStyles } from '../../styles/common';
import { listingStyles } from '../../styles/listing';
import { courses } from '../../utils/courses';

export default function Listing() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={listingStyles.scrollView}
        contentContainerStyle={{
          rowGap: 20,
          padding: 20,
          paddingBottom: 60,
        }}
      >
        {courses.map((c, i) => (
          <CourseCard course={c} key={i} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
