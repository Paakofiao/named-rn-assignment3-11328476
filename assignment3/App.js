import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello, Devs</Text>
      <Text style={styles.text1} >14 tasks today</Text>
      <Text style={styles.text3} >Categories</Text>
      <TextInput style={styles.text2} placeholder={"Search"}/>
      <Image source={require('./images/person.png')} style={styles.Profile}/>
      <Image source={require('./images/bx_slider.png')} style={styles.Profile1}/>
      <ScrollView 
      horizontal
      contentContainerStyle={styles.scrollViewContainer}
      >
      <Image source={require('./images/Group 9.png')} style={styles.groupPic} />
      <Image source={require('./images/travel2.png')} style={styles.groupPic} />
      <Image source={require('./images/cook1.png')} style={styles.groupPic} />
      <Image source={require('./images/code1.png')} style={styles.groupPic} />
      <Image source={require('./images/sport1.png')} style={styles.groupPic} />
      <Image source={require('./images/sleep1.png')} style={styles.groupPic} />
      <Image source={require('./images/church1.png')} style={styles.groupPic} />
      
      </ScrollView>
      <Text style={styles.text7}>Ongoing Task</Text>
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
    left:15,
    fontWeight: 'bold',
    bottom: 700,
    position: 'absolute'

  },
  text1:{
    bottom:670,
    left:15,
    fontSize: 13,
    position: 'absolute'

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
    top: 40,
    right: 0,
    backgroundColor: 'white',
    position:'absolute'
  },
  Profile1:{
    backgroundColor: 'red',
    right: 15,
    top: 135,
    position:'absolute'
  },
  text3:{
    fontWeight: 'bold',
    fontSize: 16,
    left: 15,
    top: 205,
    position: 'absolute'

  },
  groupPic:{
    position: 'relative',
    top:230,
    marginHorizontal:8,
   
  },
  scrollViewContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  text7:{
    left:0,
    right:0
  }
  
});
