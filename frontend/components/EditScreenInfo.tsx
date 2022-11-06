import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import React, { useState } from 'react'

import { sendNotification } from '../AppNotifications';
import { Image } from 'react-native';


export default function EditScreenInfo() {

  const [hasCheck, setHasCheck] = useState(false);

  const check = () => {
    setHasCheck(!hasCheck);
  }

  return (
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
    textAlign: 'center',
    fontFamily: 'Avenir',
  },

  timeStyle: {
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Avenir',
    innerHeight: '10%'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',

  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
