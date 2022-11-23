import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Texto con blur<Text/>
      <BlurView
        style = {styles.absolute}
        blurType = "light"
        blurAmount={10}
      />
    <Text>Texto sin blur<Text/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
