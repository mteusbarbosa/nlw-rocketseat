import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-5xl font-bold text-gray-50">
        Hello World - Mateus Barbosa
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
