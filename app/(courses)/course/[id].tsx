import { Stack, useLocalSearchParams } from 'expo-router';
import { View, SafeAreaView } from 'react-native';
import { commonStyles } from '../../../styles/common';
import Text from '../../../shared/Text';
import { screenOptions } from '../../../styles/listing';

export default function CoursePage() {
  const params = useLocalSearchParams();

  console.log(params);

  return (
    <SafeAreaView style={commonStyles.container}>
      <Stack.Screen options={screenOptions('Yo')} />

      <Text>CoursePage {params.id} </Text>
    </SafeAreaView>
  );
}
