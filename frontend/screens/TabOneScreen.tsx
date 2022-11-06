import React, { useState } from 'react';
import { StyleSheet, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react'

import FoodWaterStatsComp from '../components/FoodWaterStatsComp';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

import AddTaskModal from '../components/AddTaskModal'

let windowHeight = Dimensions.get('window').height;
import AddTaskModal from '../components/AddTaskModal';
let windowWidth = Dimensions.get('window').width;

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const [modalVisible, setModalVisible] = useState(false);

    const onShowPopup = () => {
      setModalVisible(true)
    }

    const onClosePopup = () => {
      setModalVisible(false)
    }

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [modalVisible, setModalVisible] = useState(false);

  const onShowPopup = () => {
    setModalVisible(true)
  }

  const onClosePopup = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <AddTaskModal visible = {modalVisible} closePopup = {onClosePopup} addItem = {onClosePopup}/>
      <LinearGradient
        colors={["rgba(255, 255, 255, 1)", '#7E14AF', '#4B056C']}
        style={styles.linearGradient}
        end={{ x:1, y:2 }}
        start = {{x: 0.4, y: -1.2}}
        >

        <Text style={styles.titleText}> Plan-It! </Text>
        <FoodWaterStatsComp waterTime='1' foodTime = '1'/>

      </LinearGradient>
      
      <View style={styles.listView}>
      </View>

      <TouchableOpacity style={styles.floatingButton} activeOpacity={0.7} onPress={onShowPopup}>
        <Image style={styles.addButtonImage} source = {require('../assets/images/add.png')}/> 
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  linearGradient: {
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 0,
    width: "100%",
    height: "40%",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    lineHeight: 25,
    paddingTop: 30
  },

  listView : {
    width: "100%",
    height: "60%",
    backgroundColor: "#500076"
  },

  floatingButton : {
    height: 0.09 * windowHeight,
    width: 0.09 * windowHeight,
    borderRadius: 100,
    position: 'absolute',
    top: "89%",
    left: "82%",
    right: 0,
    bottom: 0
  },

  addButtonImage : {
    height: 0.08 * windowHeight,
    width: 0.08 * windowHeight,
    marginTop: 6,
    marginBottom: 6,
    imageAlign: 'left',
    },
});
