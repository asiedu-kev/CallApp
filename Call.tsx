import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, MaterialIcons } from 'expo-vector-icons';

const CallComponent = () => {
    const [audioCallAccepted, setAudioCallAccepted] = useState(false);
    const [videoCallAccepted, setVideoCallAccepted] = useState(false);
    const [onGoingVideoCall, setOnGoingVideoCall] = useState(false);
    const [onGoingAudioCall, setOnGoingAudioCall] = useState(false);
    const [mute, setMute] = useState(false);
    const [video, setVideo] = useState(false);
    if (onGoingAudioCall) {
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
           
                <TouchableOpacity style={styles.phone_declined} onPress={() =>{
                         setOnGoingAudioCall(false);
                     }}>
                <MaterialIcons name="call-end" size={33}  color="white" />
                </TouchableOpacity>
            </View>
       </SafeAreaView>
        )
    }
    if (videoCallAccepted){
        return(
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
            <TouchableOpacity style={{...styles.phone_audio_call_accepted,marginHorizontal: '5%',}} onPress={() =>setVideo(!video)}>
            <MaterialCommunityIcons name={video ? "video-outline": "video-off-outline"}  size={33} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.phone_call,marginHorizontal: '5%'}} onPress={() =>{
                    setVideoCallAccepted(false)
                    setOnGoingVideoCall(true)}}>
                 <MaterialIcons name="call" size={33}  color="white" />
                 </TouchableOpacity>
           
                <TouchableOpacity style={{...styles.phone_declined,marginHorizontal: '5%'}} onPress={() => setVideoCallAccepted(false)}>
                <MaterialIcons name="call-end" size={33}  color="white" />
                </TouchableOpacity>
            </View>
       </SafeAreaView>
        )
    }
    if (onGoingVideoCall){
        return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', padding: 10}}>Richard DOVOEDO</Text>
                <Text style={{fontSize: 14, color: 'white',textAlign: 'center', padding: 10}}>Appel en cours</Text>
                <Text style={{fontSize: 14, color: 'white', textAlign: 'center', padding: 15 }}>00 : 00 :00</Text>
            </View>
            <View style={{backgroundColor: 'white', borderRadius: '10%'}}>
                <Image source={require('./assets/VideoCall.png')} resizeMode={'contain'} style={{margin: 9}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center',position: 'absolute', bottom: '10%'}}>
            <TouchableOpacity style={{...styles.phone_audio_call_accepted,marginHorizontal: '5%',}} onPress={() =>setVideo(!video)}>
            <MaterialCommunityIcons name={video ? "video-outline": "video-off-outline"} size={33} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.phone_call,marginHorizontal: '5%', backgroundColor: 'white'}} onPress={() =>setMute(!mute)}>
                <MaterialCommunityIcons name={ mute ? 'microphone' : 'microphone-off'} size={33} color="black" />
                 </TouchableOpacity>
           
                <TouchableOpacity style={{...styles.phone_declined,marginHorizontal: '5%'}} onPress={()=> {
                    setVideoCallAccepted(false);
                    setOnGoingVideoCall(false);
                }}>
                <MaterialIcons name="call-end" size={33}  color="white" />
                </TouchableOpacity>
            </View>
       </SafeAreaView>
       )
    }
    if (audioCallAccepted){
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
                     <TouchableOpacity style={styles.phone_call} onPress={() =>{
                         setAudioCallAccepted(false);
                         setOnGoingAudioCall(true);
                     }}>
                     <MaterialIcons name="call" size={33}  color="white" />
                     </TouchableOpacity>
                
                     <TouchableOpacity style={styles.phone_declined} onPress={() =>{
                         setAudioCallAccepted(false);
                     }}>
                     <MaterialIcons name="call-end" size={33}  color="white" />
                     </TouchableOpacity>
                 </View>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
                 <StatusBar style="light" />
                 <View style={{flexDirection: 'column', justifyContent: 'center',position: 'absolute', bottom: '45%'}}>
                     <TouchableOpacity
                     onPress={() => setAudioCallAccepted(true)}
                      style={{...styles.phone_call,flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginVertical: '5%', backgroundColor: 'white'}}>
                         <Text style={{color: '#1E1060', fontWeight: 'bold'}}>Faire un appel vocal</Text>
                     <MaterialIcons name="call" size={33}  color="#1E1060" style={{marginLeft: '5%'}} />
                     </TouchableOpacity>
                
                     <TouchableOpacity 
                     onPress={() =>setVideoCallAccepted(true)}
                     style={{...styles.phone_declined,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: '5%', backgroundColor: 'white'}}>
                     <Text style={{color: '#1E1060', fontWeight: 'bold'}}>Faire un appel video</Text>
                     <MaterialIcons name="videocam" size={33}  color="#1E1060" style={{marginLeft: '5%'}}  />
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