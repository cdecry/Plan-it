import React, { useState } from 'react';
import { StyleSheet, Dimensions, Button, TouchableOpacity, Image } from 'react-native';

import FoodWaterStatsComp from '../components/FoodWaterStatsComp';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

import TaskItem from '../components/TaskItem'
import AddTaskModal from '../components/AddTaskModal';

let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [modalVisible, setModalVisible] = useState(false);
  const [waterTime, setWaterTime] = useState(2); //just random values for now
  const [foodTime, setFoodTime] = useState(4);

  const onShowPopup = () => {
    setModalVisible(true)
  }

  const onClosePopup = () => {
    setModalVisible(false)
  }

  const resetWaterTime = () => {
    setWaterTime(0)
  }

  const resetFoodTime = () => {
    setFoodTime(0)
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
        <FoodWaterStatsComp waterTime={String(waterTime)} foodTime={String(foodTime)} resetWaterTime={resetWaterTime} resetFoodTime={resetFoodTime} />

      </LinearGradient>
      
      <View style={styles.listView}>
        <TaskItem task="Submit project" date="Nov 6, 2022" time="11:00"/>
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
    alignItems: "center"
  },
  titleText: {
    fontSize: 20,
    lineHeight: 25,
    paddingTop: 30
  },

  listView : {
    width: "100%",
    height: "60%",
    backgroundColor: "#501471",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
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
    }
})
