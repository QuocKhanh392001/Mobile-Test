import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ref, set } from 'firebase/database';
import { analytics } from './firebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";


export default function App() {
  const onPressHandler = event => setState("Changed text");

  const [joke, setJoke] = useState('Nhắc tới hoảng loạn thì mình có một câu hỏi muốn dành cho các bạn đó chính là. Các bạn gọi một chú ngựa hoảng loạn là gì ạ? Đó chính là hoảng hốt (hoảng horse).');
  const [data, setData] = useState([]);
  
  function readData(){
const starCountRef = ref(db, 'Joke/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  setJoke(data.content)
});
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTopTop}>A joke a day keeps the doctor away</Text>
        <Text style={styles.textTopBottom}>If you joke wrong way, your teeth have to pay.(Serious)</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.mainText}>{joke}</Text>
        
      </View>
      <View style={styles.bot}>
        <View style={styles.bottom}>
          <Button onPress={readData} color="#2C7EDB" title='This is funny!'/>
          <Button onPress={readData} color= "#29B363" title='This is not funny.'/>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:40,
    backgroundColor: '#FFFFFF',
  },
  top: {
    flex:1,
    backgroundColor: '#29B363',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 20

  },
  main: {
    flex: 3,
    marginHorizontal: 40
  },
  bot: {
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40
  },
  textTopTop: {
    color:'#FFFFFF',
    fontSize: 20,
    marginBottom: 10
    
  },
  textTopBottom: {
    color:'#FFFFFF',
    fontSize: 15,

  },
  mainText: {
    fontSize: 20,
    marginTop: 40
  }
});
