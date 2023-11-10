import { Logo } from '@components/logo';
import { commonStyles } from '@styles/common';
import { useRouter } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home() {
  const router = useRouter();

  const onPress = () => {
    router.push('/(courses)/listing');
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Logo />
      <Text
        style={{
          ...commonStyles.heading,
          marginTop: 4,
        }}
      >
        Welcome to LMS!
      </Text>

      <TouchableOpacity
        style={{
          ...commonStyles.btnPrimary,
          marginTop: 17,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: 'black',
            fontWeight: '400',
            width: '100%',
          }}
        >
          Browse courses
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
