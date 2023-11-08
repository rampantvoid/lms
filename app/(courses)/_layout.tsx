import { Stack } from 'expo-router';
import { screenOptions } from '../../styles/listing';

export default function CoursesLayout() {
  return (
    <Stack>
      <Stack.Screen name='listing' options={screenOptions('Courses')} />
    </Stack>
  );
}
