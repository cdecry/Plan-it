import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity ,Image} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import { sendNotification } from '../AppNotifications';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
        {/* <View style={styles.helpContainer}>
        

            <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            darkColor="rgba(255,255,255,0.05)"
            lightColor="rgba(0,0,0,0.05)">
            <MonoText>{path}</MonoText>
            </View>

        </View> */}

        <View style = {styles.container2}>
            <View style={ styles.waterContainer}> 
            <Image style={styles.imageContainer}
            source = {require('./drop.png')}
            /> 

            <Text
            style={styles.getStartedText}
                >
                # hours  
            </Text>
            <Text style={styles.bodyText}
            >since you drank water</Text>
        <View>

        </View>



        </View>

<View style={ styles.foodContainer}> 
<Image style={styles.imageContainer2}
source = {require('./food.png')}
/> 

<Text
style={styles.getStartedText}
    >
  # hours  
</Text>
<Text style={styles.bodyText}
>since you ate food</Text>
<View>

</View>
</View>


      
    </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 22,
    color: "rgba(255,255,255,1)",
    lineHeight: 24,
    fontWeight: 'bold',
    padding:6,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },

  bodyText: {
    fontSize: 14,
    padding:3,
    fontFamily: 'Avenir',
    color: "rgba(255,255,255,0.9)",
    lineHeight: 24,
    textAlign: 'center',
  },

  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },

  waterContainer: {
    backgroundColor: 'rgba(69,16,102,0.8)',
    
    borderRadius: 40/2,
      height: 130,
      width: 170,
      marginTop: 15,
      padding:11,
      marginHorizontal: 20,
     
      alignItems: 'center',
  },
  foodContainer: {
    backgroundColor: 'rgba(140,10,190,0.8)',
    paddingLeft: 0,
    paddingright: 0,
    marginLeft: 0,
    marginright: 0,
    
    borderRadius: 40/2,
      height: 130,
      width: 170,
      marginTop: 15,
      padding:11,
      marginHorizontal: 20,
      alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },

  imageContainer : {height: 28,
    marginTop: 6,
    marginBottom: 6,
  marginRight: 80,
  imageAlign: 'left',
width: 17,

  },

imageContainer2 : {
    height: 27,
    marginTop: 6,
    marginBottom: 6,
marginRight: 80,
imageAlign: 'left',
width: 36,

  },
  container2 : {
    flexDirection:'row',
    height: '100%',
    backgroundColor: 'rgba(255, 0, 255, 0.0)',
  }

});
