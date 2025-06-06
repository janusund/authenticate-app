import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const authtoken = authCtx.token;
  // Do not make useeffect as async await / use promise instead
  // In order to make this secured use the auth token from login to firebase
  useEffect(()=>{
    axios.get(`https://my-reactivenative-app-default-rtdb.firebaseio.com/message.json?auth=${authtoken}`)
    .then((response)=>{
      setFetchedMessage(response.data);
    });
  },[authtoken]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text> {fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
