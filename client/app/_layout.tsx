import { Stack } from 'expo-router';
import CourseProvider from '@providers/course-provider';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <CourseProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}
        />
      </CourseProvider>
    </>
  );
}
