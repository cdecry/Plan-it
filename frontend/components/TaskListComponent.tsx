import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, Pressable, FlatList, RefreshControl, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getData, getDataAsNumber } from './AddTaskModal';
import TaskItem from './TaskItem';

const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const TaskListComponent: React.FC = ({}) => {

    const [someData, SetSomeData] = useState([]);

    // const dataToList = async () => {
    //     var list: any[] = [];
    //     var listConstruct = '[';
    //     await getDataAsNumber(-1).then(async index => {
    //         for (let i = 0; i < Number(index); i++) {
    //             await getData(i).then(item => {
    //                 if (item != null && item != undefined)
    //                 {
    //                     list.push(item);
    //                     console.log(item);
    //                     listConstruct = listConstruct + JSON.stringify(item) + ', ';
    //                 }
    //             })
    //         }
    //     })
    //     listConstruct = listConstruct.slice(0, listConstruct.length - 2) + ']';
    //     SetSomeData(JSON.parse(listConstruct));
    //     console.log('first item: ' + JSON.stringify(JSON.parse(listConstruct)[0]));
    // }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        global.dataList = [];
        getData(-1).then(ind => {
            for (let i = 0; i < ind; i++) {
                getData(i).then(objStr => {
                    if (JSON.parse(JSON.stringify(objStr != null)))
                        global.dataList.push(JSON.parse(JSON.stringify(objStr)));
                    // console.log("CHECKING EACH" + JSON.stringify(JSON.parse(JSON.stringify(objStr))));
                    // console.log("GLOBAL: "+ global.dataList);
                }).catch(error => {console.log(error)});
            }
            
        }).catch(error=>{console.log(error)});
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const DATA = global.dataList;

    // return(<Text>ASKDJNSKJD</Text>);
    return (
        <SafeAreaView style={styles.listContainer}>
            <FlatList
                    contentContainerStyle={{ paddingBottom: 20 }}
                    data={DATA as unknown as readonly any[] | null | undefined}
                    renderItem={({item}) => (item) && <TaskItem task={item.name} date={item.date} time={item.time}/> }
                    refreshControl={<RefreshControl
                                    colors={["#2493A1", "#2493A1"]}
                                    refreshing={refreshing}
                                    onRefresh={onRefresh} />}
            />
        </SafeAreaView>
    );

}
    
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        height: '10%',
      },
});

export default TaskListComponent;