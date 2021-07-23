import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, MaterialIcons } from 'expo-vector-icons';

const CallComponent = () => {
    const [audioCallAccepted, setAudioCallAccepted] = useState(true);
    const [videoCallAccepted, setVideoCallAccepted] = useState(false);
    const [mute, setMute] = useState(false);
    if (audioCallAccepted) {
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={{backgroundColor: 'white', borderRadius: '100%'}}>
                <Image source={require('./assets/caller.png')} resizeMode={'contain'} style={{margin: 9}}/>
            </View>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', padding: 20}}>Richard DOVOEDO</Text>
                <Text style={{fontSize: 14, color: 'white',textAlign: 'center', padding: 20}}>Appel en cours</Text>
                <Text style={{fontSize: 14, color: 'white', textAlign: 'center', padding: 15 }}>00 : 00 :00</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center',position: 'absolute', bottom: '10%'}}>
                <TouchableOpacity style={styles.phone_audio_call_accepted} onPress={() =>setMute(!mute)}>
                <MaterialCommunityIcons name={ mute ? 'microphone' : 'microphone-off'} size={33} color="black" />
                </TouchableOpacity>
           
                <TouchableOpacity style={styles.phone_declined}>
                <MaterialIcons name="call-end" size={33}  color="white" />
                </TouchableOpacity>
            </View>
       </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
             <StatusBar style="light" />
             <View style={{backgroundColor: 'white', borderRadius: '100%'}}>
                 <Image source={require('./assets/caller.png')} resizeMode={'contain'} style={{margin: 9}}/>
             </View>
             <View>
                 <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', padding: 20}}>Richard DOVOEDO</Text>
                 <Text style={{fontSize: 14, color: 'white',textAlign: 'center', padding: 20}}>Appel entrant ....</Text>
             </View>
             <View style={{flexDirection: 'row', justifyContent: 'center',position: 'absolute', bottom: '10%'}}>
                 <TouchableOpacity style={styles.phone_call}>
                 <MaterialIcons name="call" size={33}  color="white" />
                 </TouchableOpacity>
            
                 <TouchableOpacity style={styles.phone_declined}>
                 <MaterialIcons name="call-end" size={33}  color="white" />
                 </TouchableOpacity>
             </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1E1060',
        justifyContent: 'center',
        alignItems: 'center',
    },
    phone_call : {
        backgroundColor: '#5BCA7A',
        padding: 15,
        borderRadius: 100,
        marginHorizontal: '10%'
    },
    phone_declined : {
        backgroundColor: '#D94141',
        padding: 15,
        borderRadius: 100,
        marginHorizontal: '10%'
    },
    phone_audio_call_accepted : {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 100,
        marginHorizontal: '10%'
    }
})

export default CallComponent;