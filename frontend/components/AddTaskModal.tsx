import { Modal, Dimensions, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
import { Button, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

declare global {
    var dataList: any[];
  }

export const storeNumberData = async (key: number, item: any) => {
    try {
      await AsyncStorage.setItem(String(key), String(item));
    } catch(e) {
      // save error
    }
  
    console.log('Stored number data.')
  }

export const storeData = async (key: number, item: any) => {
    try {
      const jsonValue = JSON.stringify(item)
      await AsyncStorage.setItem(String(key), jsonValue)
    } catch(e) {
      // save error
    }
  
    console.log('Done.')
  }


export const getData = async (key: number) => {
    try {
      const jsonValue = await AsyncStorage.getItem(String(key))
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  }

  export const getDataAsNumber = async (key: number) => {
    try {
      const jsonValue = await AsyncStorage.getItem(String(key))
      return jsonValue != null ? Number(jsonValue) : null
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  }


const clearAsyncStorage = async() => {
    AsyncStorage.clear();
}
  

const AddTaskModal = (props: {visible : boolean, closePopup : (VoidFunction), addItem : (VoidFunction) }) => {

    const defaultTimeArr = (new Date()).toLocaleTimeString().split(':');
    const defaultAMPM = defaultTimeArr[2].split(' ')[1];
    const defaultTime = defaultTimeArr[0] + ':' + defaultTimeArr[1] + ' ' + defaultAMPM;

    const [index, increaseIndex] = useState(0);
    const [taskName, setTaskName] = useState('');
    const [pickedDate, setDate] = useState((new Date()).toLocaleDateString());
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

    const handleConfirmDate = (date: Date) => {
        setDate(date.toLocaleDateString());
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
        const obj = JSON.parse('{"name":"' + taskName + '", "date":"' + pickedDate + '", "time":"' + pickedTime + '"}');
        
        getData(-1).then(ind => {
            storeData(ind, obj).then(() => {
                getData(0).then((value) => {
                    console.log(value);
                })
            });
        }).catch(error=>{console.log(error)});

        increaseIndex(index + 1);

        getData(-1).then(ind => {
            getData(ind).then(objStr => {
                global.dataList.push(JSON.parse(JSON.stringify(objStr)));
                // console.log("CHECKING EACH" + JSON.stringify(JSON.parse(JSON.stringify(objStr))));
                // console.log("GLOBAL: "+ global.dataList);
            }).catch(error => {console.log(error)});
        }).catch(error=>{console.log(error)});

        getData(-1).then(current => {
            storeNumberData(-1, current + 1);
        })

        getData(-1).then(newIndex => {
            console.log('storage index:' + newIndex);
        })
        console.log('state index: ' + index);
        

        // clearAsyncStorage();
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
                              onChangeText={text => {setTaskName(text)}}
                              keyboardType="default"
                              textAlign='center'
                            />

                            <Text style={styles.modalText}> Date (YY/MM/DD) </Text>
                            <Pressable style={styles.transactionInput} onPress={showDatePicker}>
                                <Text style={styles.dateTimeText}>{pickedDate}</Text>
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
      backgroundColor: "#D17BFA",
      borderRadius: 0.03*popupHeight,
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
      fontSize: 20,
      backgroundColor: '#E3EFF1',
      marginTop: 0,
      marginBottom: "2%",
      height: '14%',
      width: '90%',
      borderRadius: 0.02*popupHeight
    },
    addTaskButon: {
        height: "18%",
        borderRadius: 0.03*popupHeight,
        backgroundColor: "#8936D3",
        width: "80%",
        alignItems: "center",
        marginTop: "3%"
    },
    buttonText: {
        fontSize: 25,
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
  