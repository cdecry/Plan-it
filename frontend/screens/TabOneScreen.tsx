import { StyleSheet, Dimensions } from 'react-native';

import FoodWaterStatsComp from '../components/FoodWaterStatsComp';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

let windowHeight = Dimensions.get('window').height;
let popupHeight = 0.45*windowHeight;

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
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
    backgroundColor: "#501471"
  },
});
