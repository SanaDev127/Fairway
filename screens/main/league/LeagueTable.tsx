import { useRouter } from "expo-router";
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tableData = {
    tableHead: ['Player Name','Num Games', 'Points', 'Handicap'],
    tableData: [
                ["Tiger Woods", 23, 357,1],
                ["Bubba Watson", 22, 350,1],
                ["Rory Mcilroy", 22, 348,1],
    ],
    widthArr: [100, 100, 100, 100],
};

const LeagueTable = () => {
    const router = useRouter();
    const [data, setData] = useState(tableData);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4"}}>
            <View style={{marginTop: 50, padding: 2}}>
            <Text style={styles.heading}>
                Current League Table
            </Text>
                <ScrollView horizontal={true}>
                    <View>
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
            <TouchableOpacity style={styles.button} onPress={() => router.push("../club/ClubHome")}>
                <Text style={[styles.headText, {justifyContent: "center"}]}>Close</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>

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
        color: "orange",
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
})
export default LeagueTable