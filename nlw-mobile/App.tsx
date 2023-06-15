import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-zinc-950  flex-auto items-center justify-center">
      <Text className="text-zinc-50 font-bold text-5xl">Atumalaca!</Text>
      <StatusBar style="light" />
    </View>
  );
}
