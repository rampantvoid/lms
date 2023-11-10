import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { listingStyles } from '../styles/listing';
import { Course } from '../utils/courses';
import Text from '../shared/Text';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CourseCard({ course }: { course: Course }) {
  const router = useRouter();

  const onPress = () => {
    // @ts-expect-error
    router.push(`/(courses)/course/${course.id}`, {
      params: {
        course,
      },
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <SafeAreaView style={listingStyles.card}>
        <Image
          source={{
            uri: course.thumbnail,
          }}
          style={listingStyles.cardImage}
        />

        <View style={listingStyles.cardBottom}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={listingStyles.cardTitle}>{course.name}</Text>

            <View style={listingStyles.instructor}>
              <AntDesign name='user' size={15} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                }}
              >
                {`  ${course.instructor}`}
              </Text>
            </View>
          </View>

          <Text style={listingStyles.cardDescription} numberOfLines={4}>
            {course.description}
          </Text>

          <View style={listingStyles.cardFooter}>
            <Text
              style={{
                color: '#adb5bd',
                fontSize: 12,
              }}
            >
              {course.difficulty} &#183; {course.duration}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
}
