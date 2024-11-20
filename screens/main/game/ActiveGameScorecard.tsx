import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import {Row, Table} from "react-native-reanimated-table";
import Modal from 'react-native-modal';

type ScorecardProps = {
    isVisible: boolean,
    onClose: () => void,
}
const tableData = {
    tableHead: ['Hole','1', '2', '3', '4', '5', '6', '7', '8', '9'],
    tableData: [
        ["Tiger Woods", '4','5','3','6','4','2','3','2','3'],
        ["Bubba Watson", '3','5','6','2','5','6','3','4','5'],
        ["Rory Mcilroy", '5','3','4','6','2','3','6','4','5'],
    ],
    widthArr: [100, 25, 25, 25, 25, 25, 25, 25, 25, 25],
};

const ActiveGameScorecard: React.FC<ScorecardProps> = ({isVisible, onClose}) => {
    const [data, setData] = useState(tableData);
    return(
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
            swipeDirection="down"
            onSwipeComplete={onClose}
        >

            <SafeAreaView style={{flex: 1, justifyContent:"center", maxHeight:400}}>
                <Text style={[styles.heading, {marginLeft:20}]}>
                    Game Scorecard
                </Text>
                <ScrollView horizontal={true} >
                    <View style={{justifyContent: "center", marginLeft:12}}>
                        <Table borderStyle={{borderWidth: 4, borderColor: 'teal'}}>
                            <Row data={data.tableHead}
                                 style={styles.head}
                                 widthArr={data.widthArr}
                                 textStyle={styles.headText}/>
                        </Table>
                        <ScrollView>
                            <Table borderStyle={{borderWidth: 4, borderColor: 'teal'}}>
                                {data.tableData.map((rowData, index) => (
                                    <Row key={index}
                                         data={rowData}
                                         widthArr={data.widthArr}
                                         style={styles.rowSection}
                                         textStyle={styles.text}/>
                                ))}
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onClose()}}
                            >
                    <Text style={[styles.headText, {justifyContent: "center"}]}>Close</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>


    );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, justifyContent: 'center', backgroundColor: '#fff' },
    head: { height: 44, backgroundColor: 'darkblue' },
    rowSection: { height: 60, backgroundColor: '#E7E6E1' },
    headText: { fontSize: 15, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
    headingText:{ fontSize: 24, fontWeight: 'bold',},
    heading: {
        color: "blue",
        fontSize: 35,
        justifyContent: 'center',
    },
    button: {
        fontSize: 16,
        padding: 13,
        margin: 5,
        borderRadius: 8,
        backgroundColor: "red",
        elevation: 20,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
})
export default ActiveGameScorecard;