import { commonStyles } from '@styles/common';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Loader() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ActivityIndicator size='large' color='white' />
    </SafeAreaView>
  );
}
