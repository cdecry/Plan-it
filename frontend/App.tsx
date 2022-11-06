import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { getData, getDataAsNumber, storeData, storeNumberData } from './components/AddTaskModal';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });  


  declare global {
    var token: string;
  }

export default function App() {
    useEffect(() => {
        var newIndex = false;
        registerForPushNotificationsAsync().catch(error => console.log('error: ', error));
        global.dataList = [];
        (getDataAsNumber(-1)).then(ind => {
            console.log("index on start app: " + ind);
            if (!(typeof(ind) === typeof(0))) {
                console.log("index not zero, set newindex to true");
                newIndex = true;
            }
        });

        if (newIndex) {
            console.log("newIndex set to true, defaulting index and daatalist");
            storeNumberData(-1, 0);
        }
        else {
            (getDataAsNumber(-1)).then(ind => {

                for (let i = 0; i < Number(ind) + 1; i++) {
                    getData(i).then(item => {
                        global.dataList.push(JSON.parse(JSON.stringify(item)));
                    })
                }
            });
        }
    }, []);
    async function registerForPushNotificationsAsync() {
        let token;
    
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
    
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        global.token = token;
        // console.log(global.token);
        return token;
    }

    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
    return null;
    } else {
    return (
        <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        </SafeAreaProvider>
    );
    }
}
