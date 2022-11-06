import { Text, View } from './Themed';
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

let windowHeight = Dimensions.get('window').height;

const TaskItem = (props: {task: string, date: string, time: string}) => {

    const [hasCheck, setHasCheck] = useState(false);

    const check = () => {
        setHasCheck(!hasCheck);
    }

    return (
        <View style={styles.TaskItemContainer}>
            <TouchableOpacity style={styles.taskItemOpacity} onPress={check}>
                

                {hasCheck &&
                    <Image source={require('../assets/images/check.png')} style={styles.Checkmark}/>}

                <Image source={require('../assets/images/square.png')} style={styles.Checkbox}/>

                
                <View style = {styles.TaskInformationContainer}>
                    <Text style={styles.TaskNameText}> {props.task} </Text>
                    <Text style={styles.DueDateText}> {props.date} @ {props.time} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TaskItem;

const styles = StyleSheet.create({
    TaskItemContainer: {
      topPadding: '30%',
      bottomPadding: '50%',
      alignItems: 'center',
      backgroundColor: "#212121",
      height: "20%",
      width: "90%",
      borderRadius: 15,
  
    },
    taskItemOpacity: {
      width: "100%",
      height: "100%",
      justifyContent: 'flex-start',
      alignContent: 'center',
      display: 'flex',
      flexDirection: "row",
      alignItems: "center"
    },

    Checkmark: {
        width: 0.05 * windowHeight,
        height: 0.05 * windowHeight,
        marginLeft: 20,
        position: 'absolute',
        top: "20%",
        left: "2%",
        right: 0,
        bottom: 0 
    },

    Checkbox: {
        width: 0.05 * windowHeight,
        height: 0.05 * windowHeight,
        marginLeft: "7%",
    },

    TaskInformationContainer: {
        backgroundColor: "transparent",
        width: "70%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "2%",
        paddingLeft: "3%",
    },

    TaskNameText: {
        fontSize: 0.0255 * windowHeight,
        textAlign: 'center',
        fontFamily: 'Avenir',
        innerHeight: '10%',
        color: "#EBC6FF"
      },

    DueDateText: {
      fontSize: 0.018 * windowHeight,
      opacity: 0.8,
      fontWeight: 'bold',
      padding: "3%",
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: "#DFA1FF"
    },
    
  });