import { Stack } from 'expo-router';
import { screenOptions } from '@styles/listing';

export default function CoursesLayout() {
  return (
    <Stack
      screenOptions={{
        animation: 'none',
      }}
    >
      <Stack.Screen name='listing' options={screenOptions('Courses')} />
    </Stack>
  );
}
