import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello, Devs</Text>
      <Text style={styles.text1} >14 tasks today</Text>
      <TextInput style={styles.text2} placeholder={"Search"}/>
      <Image source={require('./images/person.png')} style={styles.Profile}/>
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
  text2:{
    position: 'absolute',
    top: 130,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    width: 280,
    left: 20
  },
  Profile:{
top: -350,
right: -145,
backgroundColor: 'white'
  }
});
