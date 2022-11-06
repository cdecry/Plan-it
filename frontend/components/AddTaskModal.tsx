import { Modal, Dimensions, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
import { Button, Pressable } from 'react-native';

let windowHeight = Dimensions.get('window').height;
let popupHeight = 0.45*windowHeight;

/*  *** TO DO ***
[x] Modal front end view
[ ] Backend implementation
[ ] Input validation for time and conversion to date time format

*/

/* Copy paste this where you want to put this modal:

    ***Need this import
    import { useState } from 'react'

    ***This goes before your return statement
    const [modalVisible, setModalVisible] = useState(false);

    const onShowPopup = () => {
      setModalVisible(true)
    }

    const onClosePopup = () => {
      setModalVisible(false)
    }

    ***Sample usage
    <AddTaskModal visible = {modalVisible} closePopup = {onClosePopup} addItem = {onClosePopup}/>
    <Button title="Test" onPress = {onShowPopup}></Button>

*/


const AddTaskModal = (props: {visible : boolean, closePopup : (VoidFunction), addItem : (VoidFunction) }) => {

    const defaultTimeArr = (new Date()).toLocaleTimeString().split(':');
    const defaultAMPM = defaultTimeArr[2].split(' ')[1];
    const defaultTime = defaultTimeArr[0] + ':' + defaultTimeArr[1] + ' ' + defaultAMPM;

    const [pickedDate, setDate] = useState(new Date());
    const [pickedTime, setTime] = useState(defaultTime);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmDate = (date: any) => {
        setDate(date);
        hideDatePicker();
    };

    const handleConfirmTime = (time: Date) => {
        const timeArr = time.toLocaleTimeString().split(':');
        const amPM = timeArr[2].split(' ')[1];
        const newTime = timeArr[0] + ':' + timeArr[1] + ' ' + amPM;
        setTime(newTime);
        hideTimePicker();
    };

    const addItem = () => {
        props.addItem()
        props.closePopup()
    }

    return (
        <Modal
              animationType="slide"
              transparent={true}
              visible={props.visible}
              onRequestClose={() => {
                props.closePopup();
              }}
            >
                <TouchableWithoutFeedback
                  onPress={props.closePopup}
                >
                  <View style={styles.centeredView}>
                    <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                          <Text style={styles.modalText}>Task Name </Text>
                            <TextInput 
                              style={styles.transactionInput}
                              keyboardType="default"
                              textAlign='center'
                            />

                            <Text style={styles.modalText}> Date (YY/MM/DD) </Text>
                            <Pressable style={styles.transactionInput} onPress={showDatePicker}>
                                <Text style={styles.dateTimeText}>{pickedDate.toLocaleDateString()}</Text>
                            </Pressable>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirmDate}
                                onCancel={hideDatePicker}
                            />

                            <Text style={styles.modalText}> Time Due (24 Hour) </Text>
                            <Pressable style={styles.transactionInput} onPress={showTimePicker}>
                                <Text style={styles.dateTimeText}>{pickedTime}</Text>
                            </Pressable>
                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleConfirmTime}
                                onCancel={hideTimePicker}
                            />

                          <TouchableOpacity style={styles.addTaskButon} onPress={addItem}>
                            <Text style={styles.buttonText} > ADD TASK </Text>
                          </TouchableOpacity>

                      </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
        </Modal>
    )
}

export default AddTaskModal;

const styles = StyleSheet.create({
    centeredView: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerOpacity: {
      height: popupHeight,
      width: '80%',
    },
    modalView: {
      margin: 20,
      paddingTop: 20,
      backgroundColor: "#E3A9FF",
      borderRadius: 0.02*popupHeight,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: popupHeight,
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    modalText: {
      marginBottom: 5,
      textAlign: "left",
      marginRight: "30%",
      color: "#470267",
      fontSize: 0.045*popupHeight,
      width: "60%"
    },
    transactionInput: {
        paddingLeft: '1%',
        paddingRight: '1%',
      fontSize: '20%',
      backgroundColor: '#E3EFF1',
      marginTop: 0,
      marginBottom: "2%",
      height: '14%',
      width: '90%',
      borderRadius: 0.02*popupHeight
    },
    addTaskButon: {
        height: "18%",
        borderRadius: 0.05*popupHeight,
        backgroundColor: "#8936D3",
        width: "80%",
        alignItems: "center",
        marginTop: "3%"
    },
    buttonText: {
        fontSize: '25%',
        marginTop: "7%",
        textAlign: 'center',
        color: "white"
    },
    dateTimeText: {
        paddingTop: '5%',
        textAlign: 'center',
        fontSize: 20,
    }

  });
  