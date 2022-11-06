import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity ,Image} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import React, { useState } from 'react'

import { sendNotification } from '../AppNotifications';


export default function EditScreenInfo() {

    const [hasCheck, setHasCheck] = useState(false);

    const check = () => {
    setHasCheck(!hasCheck);
}

    return (
        <View>
            <View style={styles.getStartedContainer}>
                <TouchableOpacity style={styles.componentOpacity} onPress={check}>
                    <Text
                    style={styles.timeStyle}
                    darkColor="#ffffff"
                    >
                    Task: submit reflction
                    </Text>

                    {hasCheck &&
                    <Image source={require('./check.png')} style={{ width: 32, height: 32, marginLeft: 20, position: 'absolute', top: 30, left: 8, right: 0, bottom: 0 }}
                    />}

                    <Image source={require('./square.png')} style={{ width: 35, height: 35, marginLeft: 20, }}
                    />

                    <Text
                    style={styles.getStartedText}
                    darkColor="#ffffff"
                    >
                    Date, Time: sunday @ 11:59 pm
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
  getStartedContainer: {
    topPadding: '30%',
    bottomPadding: '50%',
    alignItems: 'center',
    backgroundColor: "#312837",
    height: "25%",
    width: "90%",
    borderRadius: 15,

  },
  componentOpacity: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignContent: 'center'
  },
  homeScreenFilename: {
    marginVertical: 7,
    alignContainer: 'center'
  },
  codeHighlightContainer: {
    borderRadius: 10,
    paddingHorizontal: 5,
    width: '80%',
    alignContent: 'center'


  },
  getStartedText: {
    fontSize: 14,
    opacity: 0.8,
    color: "rgba(255,255,255,1)",
    lineHeight: 24,
    fontWeight: 'bold',
    padding:6,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },

  bodyText: {
    fontSize: 14,
    padding:3,
    fontFamily: 'Avenir',
    color: "rgba(255,255,255,0.9)",
    lineHeight: 24,
    textAlign: 'center',
  },

  timeStyle: {
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Avenir',
    innerHeight: '10%'
  },

  helpContainer: {
    marginTop: 15,
    alignItems: 'center',

  },

  waterContainer: {
    backgroundColor: 'rgba(69,16,102,0.8)',
    
    borderRadius: 40/2,
      height: 130,
      width: 170,
      marginTop: 15,
      padding:11,
      marginHorizontal: 20,
     
      alignItems: 'center',
  },
  foodContainer: {
    backgroundColor: 'rgba(140,10,190,0.8)',
    paddingLeft: 0,
    paddingright: 0,
    marginLeft: 0,
    marginright: 0,
    
    borderRadius: 40/2,
      height: 130,
      width: 170,
      marginTop: 15,
      padding:11,
      marginHorizontal: 20,
      alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },

  imageContainer : {height: 28,
    marginTop: 6,
    marginBottom: 6,
  marginRight: 80,
  imageAlign: 'left',
width: 17,

  },

imageContainer2 : {height: 27,
  marginTop: 6,
  marginBottom: 6,
marginRight: 80,
imageAlign: 'left',
width: 36,

  },
  container2 : {flexDirection:'row',
  },
  addbutton : {height: 30,
    width:60,
    borderRadius: 40/2,
    position: 'absolute', top: 310, left: 333, right: 0, bottom: 0
  },
  imageContainer3 : {height: 33,
    marginTop: 6,
    marginBottom: 6,
  imageAlign: 'left',
  width: 33,
  
    },

});
