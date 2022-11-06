import { Modal, Dimensions, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native'

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
                          <Text style={styles.modalText}> Item Name </Text>
                            <TextInput 
                              style={styles.transactionInput}
                              keyboardType="default"
                              textAlign='center'
                              maxLength={10}
                            />

                            <Text style={styles.modalText}> Date (DD/YY/MM) </Text>
                            <TextInput 
                              style={styles.transactionInput}
                              keyboardType="number-pad"
                              textAlign='center'
                              maxLength={10}
                            />

                            <Text style={styles.modalText}> Time Due (24 Hour) </Text>
                            <TextInput 
                              style={styles.transactionInput}
                              keyboardType="number-pad"
                              textAlign='center'
                              maxLength={10}
                            />

                          <TouchableOpacity style={styles.addTaskButon} onPress={addItem}>
                            <Text style={styles.buttonText} > Add </Text>
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
        marginTop: "8%",
        marginRight: "5%",
        color: "white"
    }

  });
  