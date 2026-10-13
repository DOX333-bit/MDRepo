import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ez az én React Native alkalmazásom.</Text>
      <Text>Név: Dominik és Márk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0234d8d2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
