import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello, Devs</Text>
      <Text style={styles.text1} >14 tasks today</Text>
      <TextInput style={styles.text2} placeholder={require("./images/Group 5 (1).png")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize: 24,
    left:-120,
    fontWeight: 'bold',
    bottom: 300,

  },
  text1:{
    bottom: 300,
    left:-150,
    fontSize: 10,
  },
});
