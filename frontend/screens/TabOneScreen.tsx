import React, { useState } from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

let windowHeight = Dimensions.get('window').height;
let popupHeight = 0.45*windowHeight;
import AddTaskModal from '../components/AddTaskModal';

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
      {/* <LinearGradient
        colors={["rgba(255, 255, 255, 1)", '#7E14AF', '#4B056C']}
        style={styles.linearGradient}
        end={{ x:1, y:2 }}
        start = {{x: 0.4, y: -1.2}}
      >
      </LinearGradient>
      
      <View style={styles.listView}>
      
      </View>

      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        
    <AddTaskModal visible = {modalVisible} closePopup = {onClosePopup} addItem = {onClosePopup}/>
    <Button title="Test" onPress = {onShowPopup}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  linearGradient: {
    width: "100%",
    height: "34%"
  },
  listView : {
    width: "100%",
    height: "66%",
    backgroundColor: "#501471"
  },
});
