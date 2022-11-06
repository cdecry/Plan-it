import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

let windowHeight = Dimensions.get('window').height;

export default function FoodWaterStatsComp(props: {waterTime: string, foodTime: string, resetWaterTime: (VoidFunction), resetFoodTime: (VoidFunction)}) {
  return (
      <View style={styles.ComponentContainer}>

        <TouchableOpacity style={styles.waterContainer} onPress={props.resetWaterTime}>

          <Image style={styles.waterAssetStyle} source={require('./drop.png')} />
          <Text style={styles.statisticsTextStyle}> {props.waterTime} hours </Text>
          <Text style={styles.bodyText}> Since you drank water</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.foodContainer} onPress={props.resetFoodTime}>

          <Image style={styles.foodAssetStyle} source={require('./food.png')} />
          <Text style={styles.statisticsTextStyle}> {props.foodTime} hours </Text>
          <Text style={styles.bodyText}> Since you've eaten food</Text>

        </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  
  ComponentContainer: {
    flexDirection: 'row',
    backgroundColor: "transparent",
    width: "100%",
    height: "85%",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "4%",
  },

  waterContainer: {
    backgroundColor: '#2E0069',
    borderRadius: 0.01 * windowHeight,
    height: "72%",
    width: "40%",
    marginTop: 0.015 * windowHeight,
    padding: "2%",
    marginHorizontal: 0.03 * windowHeight,
    alignItems: 'center',
  },

  foodContainer: {
    backgroundColor: '#834BCA',
    marginLeft: 0,
    marginright: 0,
    borderRadius: 0.01 * windowHeight,
    height: "72%",
    width: "40%",
    marginTop: 0.015 * windowHeight,
    padding: "2%",
    marginHorizontal: 0.03 * windowHeight,
    alignItems: 'center',
  },

  waterAssetStyle: {
    height: 28,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 80,
    imageAlign: 'left',
    width: 17,
  },

  foodAssetStyle: {
    height: 27,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 80,
    imageAlign: 'left',
    width: 36,
    backgroundColor: "transparent"
  },

  statisticsTextStyle: {
    fontSize: 0.03 * windowHeight,
    color: "rgba(255,255,255,1)",
    lineHeight: 0.03*windowHeight,
    fontWeight: 'bold',
    padding: 0.01*windowHeight,
    fontFamily: 'Avenir',
    textAlign: 'center',
    marginRight: "15%"
  },

  bodyText: {
    fontSize: 0.02 * windowHeight,
    padding: 0.003 * windowHeight,
    fontFamily: 'Avenir',
    color: "rgba(255,255,255,0.9)",
    lineHeight: 0.03 * windowHeight,
    textAlign: 'center',
  },
});
