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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            dignissimos eaque a iste repudiandae eius minus! Accusantium dolorem
            odio non eligendi quam sunt, suscipit nemo obcaecati voluptatem
            velit molestiae voluptate! Facere sequi, earum a itaque similique
            saepe eveniet, quasi sit quis delectus non. Ut voluptates neque enim
            ipsam, quo perspiciatis repudiandae qui iusto vitae esse, totam et
            reiciendis earum quos. Temporibus atque maiores itaque quidem esse
            aut, quae debitis error pariatur velit totam consequuntur natus
            magni corrupti numquam laborum quia libero ipsa? Amet error,
            corrupti iste aliquid aperiam magnam ab. Accusamus quos culpa illo
            nostrum vel tempore cumque incidunt earum dolores, quia
            consequuntur, voluptatem vero? Illo, officiis pariatur quo
            distinctio saepe incidunt rem quod quis. Ex ipsam natus ratione in?
            Quam optio provident recusandae libero quis cum tempora. Accusamus
            explicabo quisquam aliquam veritatis ipsa in quaerat libero autem
            placeat quas deserunt commodi iure excepturi doloremque, blanditiis
            iusto corrupti quam tempora?
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
