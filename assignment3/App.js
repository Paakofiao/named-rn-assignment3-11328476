import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, FlatList } from 'react-native';
 

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={{paddingBottom: 20}}>
      <Text style={styles.text} >Hello, Devs</Text>
      <Text style={styles.text1} >14 tasks today</Text>
      <Text style={styles.text3} >Categories</Text>
      <TextInput style={styles.text2} placeholder={"Search"}/>
      <Image source={require('./images/person.png')} style={styles.Profile}/>
      <Image source={require('./images/bx_slider.png')} style={styles.Profile1}/>
      <View style={styles.category}>
      <ScrollView 
      horizontal={true} showsHorizontalScrollIndicator={false}
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
      </View>
       <Text style={styles.text7}>Ongoing Tasks</Text>
       <FlatList style={{marginTop: 10}}
        data={[
          {key: '1', text: 'Mobile Development'}, {key: '2', text: 'Web Development'},
          {key: '3', text: 'Push Ups'}, {key: '4', text: 'Sit Ups'},
          {key: '5', text: 'Have Quiet Time '}, {key: '6', text: 'Charity'},
          {key: '7', text: 'Have Lunch'}, {key: '8', text: 'Lunges'},
          {key: '9', text: 'Lift Weights'}, {key: '10', text: 'Visit Kumasi'},
          {key: '11', text: 'Data Structures'}, {key: '12', text: 'Wash Car'},
          {key: '13', text: 'Feed Dog'}, {key: '14', text: 'Finish Assignment'},
          {key: '15', text: 'Visit Grandma'},
        ]}
        renderItem={({item}) => (
          <View style={styles.ongoingTasks}>
            <Text style={styles.taskList}>{item.text}</Text>
          </View>
        )}
       />
        </View>
      <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize: 24,
    left:15,
    fontWeight: 'bold',
    bottom: 700,
    position: 'absolute',
    top: 50
  },
  text1:{
    bottom:670,
    left:15,
    fontSize: 13,
    position: 'absolute',
    top: 85,
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
    position:'absolute',
    borderRadius:20
  },
  text3:{
    fontWeight: 'bold',
    fontSize: 16,
    left: 15,
    top: 205,
    position: 'absolute'

  },
  groupPic:{
    marginTop: -20,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  text7:{
    fontWeight: 'bold',
    fontSize: 24,
  },

  ongoingTasks:{
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginLeft: 15,
    marginRight: 15,
  },

 taskList:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  width: 350,
  height: 100,
 },

 category:{
  maxHeight: 200,
  marginTop: 250,
 }
});
