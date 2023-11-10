import { Stack, Tabs } from 'expo-router';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function CoursesLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#141414',
            borderTopColor: '#343a40',
          },
          tabBarActiveTintColor: 'white',
        }}
      >
        <Tabs.Screen
          name='listing'
          options={{
            title: 'All Courses',
            tabBarIcon: (props) => (
              <Fontisto name='discourse' size={18} color={props.color} />
            ),
          }}
        />
        <Tabs.Screen
          name='me'
          options={{
            title: 'Your Courses',
            tabBarIcon: (props) => (
              <FontAwesome name='user' size={18} color={props.color} />
            ),
          }}
        />

        <Tabs.Screen
          name='course/[id]'
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
