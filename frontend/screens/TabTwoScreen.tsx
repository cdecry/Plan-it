import { StyleSheet, TextInput, Text, View, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { LinearGradient } from 'expo-linear-gradient';
import { getData, storeData } from '../components/AddTaskModal';
import { sendNotification } from '../AppNotifications';

let windowHeight = Dimensions.get('window').height;

export default function TabTwoScreen() {

  const defaultTimeArr = (new Date()).toLocaleTimeString().split(':');
  const defaultAMPM = defaultTimeArr[2].split(' ')[1];
  const defaultTime = defaultTimeArr[0] + ':' + defaultTimeArr[1] + ' ' + defaultAMPM;

  const [eatInterval, setEatInterval] = useState(4);
  const [drinkInterval, setDrinkInterval] = useState(2);

  const [pickedTime, setTime] = useState(defaultTime);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [pickedSleepTime, setSleepTime] = useState(defaultTime);
  const [isSleepTimePickerVisible, setSleepTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const showSleepTimePicker = () => {
    setSleepTimePickerVisibility(true);
  };

  const hideSleepTimePicker = () => {
    setSleepTimePickerVisibility(false);
  };
  
  storeData(-7, eatInterval);
  storeData(-8, drinkInterval);
  
  getData(-7).then(num => {
    console.log('food int ' + num);
  })
  getData(-77).then(num => {
    getData(-7).then(inter => {
        if (((new Date()).getDate() - num) >= inter)
            sendNotification(global.token, "Plan-it!", "Please remember to eat!");
      })
    
  })
 
  getData(-8).then(num => {
    console.log('water int ' + num);
  })
  getData(-88).then(num => {
    getData(-8).then(inter => {
        if (((new Date()).getDate() - num) >= inter)
            sendNotification(global.token, "Plan-it!", "Please remember to stay hydrated!");
        else
            console.log(num);
      })
    
  })



  const handleConfirmTime = (time: Date) => {
    const timeArr = time.toLocaleTimeString().split(':');
    const amPM = timeArr[2].split(' ')[1];
    const newTime = timeArr[0] + ':' + timeArr[1] + ' ' + amPM;
    setTime(newTime);
    hideTimePicker();
  };

  const handleSleepTime = (time: Date) => {
    const sleepTimeArr = time.toLocaleTimeString().split(':');
    const amPMSleep = sleepTimeArr[2].split(' ')[1];
    const newSleepTime = sleepTimeArr[0] + ':' + sleepTimeArr[1] + ' ' + amPMSleep;
    setSleepTime(newSleepTime);
    hideSleepTimePicker();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(255, 255, 255, 1)", '#7E14AF', '#4B056C']}
        style={styles.linearGradient}
        end={{ x: 1, y: 2 }}
        start={{ x: 0.4, y: -1.2 }}
      >

        <Text style={styles.title}> Settings </Text>

        <Text style={styles.inputText}> Water Interval (Hours) </Text>
        <TextInput
          style={styles.transactionInput}
          keyboardType="number-pad"
          textAlign='center'
            onChangeText={text => setDrinkInterval(Number(text))}
          returnKeyType='done'
        />

        <Text style={styles.inputText}> Food Interval (Hours) </Text>
        <TextInput
          style={styles.transactionInput}
          keyboardType="number-pad"
          textAlign='center'
          onChangeText={text => setEatInterval(Number(text))}
          returnKeyType='done'
        />

        <Text style={styles.inputText}> Wake Up Time </Text>
        <Pressable style={styles.transactionInput} onPress={showTimePicker}>
          <Text style={styles.dateTimeText}>{pickedTime}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
        />

        <Text style={styles.inputText}> Sleep Time </Text>
        <Pressable style={styles.transactionInput} onPress={showSleepTimePicker}>
          <Text style={styles.dateTimeText}>{pickedSleepTime}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isSleepTimePickerVisible}
          mode="time"
          onConfirm={handleSleepTime}
          onCancel={hideSleepTimePicker}
        />

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.buttonText} > Confirm Changes </Text>
        </TouchableOpacity>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: "100%",
    width: "100%"
  },
  linearGradient: {
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: 0,
    width: "100%",
    height: "100%",
    alignContent: "flex-end",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 10
  },
  inputText: {
    marginBottom: 5,
    textAlign: "left",
    marginRight: "30%",
    color: "white",
    fontSize: 20,
    width: "60%"
  },
  transactionInput: {
    paddingLeft: '1%',
    paddingRight: '1%',
    fontSize: 15,
    backgroundColor: '#E3EFF1',
    marginTop: 0,
    marginBottom: "5%",
    height: 0.06 * windowHeight,
    width: '90%',
    borderRadius: 10
  },
  dateTimeText: {
    paddingTop: '5%',
    textAlign: 'center',
    fontSize: 20,
  },
  confirmButton: {
    height: "10%",
    borderRadius: 15,
    backgroundColor: "#E3EFF1",
    width: "90%",
    alignItems: "center",
    marginTop: "40%"
  },
  buttonText: {
    fontSize: 20,
    marginTop: "6%",
    textAlign: 'center',
    color: "black"
  },
});
function storeDataAsNumber(arg0: number, eatInterval: number) {
    throw new Error('Function not implemented.');
}

