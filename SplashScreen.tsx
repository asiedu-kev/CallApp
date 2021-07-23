import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';


const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
             <StatusBar style="light" />
            <View style={styles.sub_container}>
            <MaterialIcons name="call" size={52} style={styles.phone_call} color="white" />
            </View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', padding: 20}}>My Call App</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#1E1060',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    sub_container : {
        backgroundColor: '#5BCA7A',
        borderRadius: 50,
    },
    phone_call : {
        padding: 15
    }
});

export default SplashScreen;