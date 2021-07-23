import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CallComponent from './Call';
import SplashScreen from './SplashScreen';

export default function App() {
  const [next, setNext] = useState(false);
  useEffect(() => {
    setTimeout(()=>{
      setNext(true)
    },5000)
  },[]);
  
  if(next){
    return (
      <CallComponent />
    );
  }
  return (
    <SplashScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
