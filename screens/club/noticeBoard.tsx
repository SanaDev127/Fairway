import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';
import React, {useEffect, useState} from 'react';
import { useRouter } from "expo-router";
import ActiveGameScorecard from "@/screens/main/game/ActiveGameScorecard";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal, FlatList, TextStyle, TextInput } from 'react-native';
import { coursesData } from '@/constants/Data';
import { Dropdown } from 'react-native-element-dropdown';
import CalendarPicker from 'react-native-calendar-picker';
import { FlatListStyle } from '@/assets/style/flatListStyle';

const NoticeBoard = () => {
    const router = useRouter();

    const [openGameModal, setOpenGameModal] = useState(false); //open and close modal
    const [open, setOpen] = useState(false);
    const [courseValue, setCourseValue] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [availableSlot, setAvailableSlot] = useState('');
    const minDate = new Date();

    const  [searchData, setSearchData] = useState([
        { name: 'Game 1', id: '1', course: 'Centurion Country Club', date: '2024-10-17', score: '85' },
        { name: 'Game 2', id: '2', course: 'Jackal Creek Golf Estate', date: '2024-10-18', score: '90' },
        { name: 'Game 3', id: '3', course: 'Akasia', date: '2024-10-19', score: '78' },
        { name: 'Game 4', id: '4', course: 'Germiston Golf Club', date: '2024-10-20', score: '92' },
    ])

    const noticeBoardData = [
        {id: '1', Organiser: 'Tony', location:'Akasia', time: '2024-10-17', availableSlots:'2'},
        {id: '2', Organiser: 'Harvey', location:'Wingate Park Country Club', time: '2025-01-17', availableSlots:'7'},
        {id: '3', Organiser: 'Bruce', location:'Centurion Country Club', time: '2025-02-17', availableSlots:'5'},
        {id: '4', Organiser: 'Steve', location:'Krugersdorp Golf Club', time: '2025-03-17', availableSlots:'6'},
    ];

    function openPostGame (){
        setOpenGameModal(!openGameModal);
        console.log("open");
    }
    
    function closePostGame (){
        setOpenGameModal(!openGameModal);
    }
    function OpenDatepicker (){
        setOpen(!open);
    }

    function CloseDatePicker (){
        setOpen(!open);
    }

    const formatDate = (date) => {
        return date ? date.toLocaleDateString("en-GB", {
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric'
        }) : "None";
    };

    const onDateChange = (date, type) => {
        if (type === "END_DATE") {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null); // Clear end date if a new start date is chosen
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
        <View style={globalStyles.container}>
          
            


            <View style={styles.btnContainer}>           
                <CustomButton
                onPress={openPostGame}
                title="Post Game"
                buttonStyle={[styles.headerButton]}
                />
              
                    <Modal animationType="slide" transparent={true} visible={openGameModal}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalContainer}>
                                <Text style={globalStyles.title}>Course</Text>
                                <Dropdown
                                    data={coursesData}
                                    labelField={"courseName"}
                                    valueField={"value"}
                                    placeholder="Search Course"
                                    value={courseValue}
                                    search
                                    searchPlaceholder="Search..."
                                    onChange={(item) => {
                                    setCourseValue(item.value);
                                        console.log(item.value);
                                    }}
                                    style={styles.dropdown}
                                />

                                <Text style={globalStyles.title}>Date</Text>
                                <TouchableOpacity onPress={OpenDatepicker}>
                                    <TextInput
                                        editable={false}
                                        style={styles.textBox}
                                        value={`${formatDate(selectedStartDate)} to ${formatDate(
                                        selectedEndDate )}`}
                                    />
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={open}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalContainerdate}>
                                            <CalendarPicker
                                                startFromMonday={true}
                                                allowRangeSelection={true}
                                                minDate={minDate}
                                                todayBackgroundColor="#f2e6ff"
                                                selectedDayColor="#7300e6"
                                                selectedDayTextColor="#FFFFFF"
                                                onDateChange={onDateChange}
                                            />

                                            <CustomButton
                                                onPress={CloseDatePicker}
                                                title="Close"
                                                buttonStyle={{backgroundColor: "#C6ECAE",alignSelf: "center"}}
                                            />
                                        </View>
                                    </View>
                                </Modal>

                                <View style={styles.container}>
                                    <Text style={globalStyles.title}>Available Slots</Text>
                                    <TextInput
                                        style={styles.textBox}
                                        value={availableSlot}
                                        onChange={(event) => setAvailableSlot(event.nativeEvent.text)}>

                                    </TextInput>
                                </View>

                                <View style={globalStyles.rowitemsContainer}>
                                    <CustomButton
                                        onPress={() => router.push("../profile/clubDetails")}
                                        title="Post"
                                        buttonStyle={{backgroundColor: "#33FF33", alignSelf: "center", marginTop: 15, marginRight: 15}}
                                    />

                                    <TouchableOpacity onPress={closePostGame}>
                                    <Text>Close</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </Modal>
            </View>
            
            <View style={[globalStyles.header, styles.header]}>
                <Text style={globalStyles.title}>Notice Board</Text>

                {/* FlatList horizontal */}

                <FlatList
                    data = {noticeBoardData}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.noticeCard}>
                            <Text style={styles.noticeText}>Organiser: {item.Organiser}</Text>
                            <Text style={styles.noticeText}>Location: {item.location}</Text>
                            <Text style={styles.noticeText}>Time: {item.time}</Text>
                            <Text style={styles.noticeText}>Availiable Slots: {item.availableSlots}</Text>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.noticeList}
                    />
            </View>


          <CustomButton
            onPress={() => router.push("../game/startGame")}
            title="Start Game"
            textStyles={{ fontSize: 24 }}
            buttonStyle={{
              backgroundColor: "#C6ECAE",
              alignSelf: "center",
              marginTop: 25,
            }}
          />

          <View style={{ flex: 1 }}>
            <FlatList
              data={searchData}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => toggleModal()}>
                  <View style={FlatListStyle.itemContainer}>
                    <Text style={FlatListStyle.item}>{item.name}:</Text>
                    <Text style={FlatListStyle.item}>
                      Course: {item.course || "Course Name"}
                    </Text>
                    <Text style={FlatListStyle.item}>
                      Date: {item.date || "Game Date"}
                    </Text>
                    <Text style={FlatListStyle.item}>
                      Score: {item.score || "User's Score"}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
            <ActiveGameScorecard
              isVisible={isModalVisible}
              onClose={toggleModal}
            />
          </View>

          <CustomButton
            onPress={() => router.push("../game/startGame")}
            title="View All"
            textStyles={{ fontSize: 15 }}
            buttonStyle={{
              backgroundColor: "#008cff",
              alignSelf: "center",
              marginTop: 25,
            }}
          />
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header:{
        marginTop: 60,
    },
    headerButton: {
        backgroundColor: "#C6ECAE",
        alignSelf: "center",
        marginRight: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    dropdown: {
        margin: 16,
        height: 50,
        width: 250,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    btnContainer : {
        position: "absolute",
        right: 10,
        marginTop: 50
    },
    modalContainer: {
        backgroundColor: "white",
        margin: 20,
        borderRadius: 20,
        width: 350,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalContainerdate: {
        backgroundColor: "white",
        margin: 20,
        borderRadius: 20,
        width: "100%",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textBox: {
        height: 40,
        width: 230,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "white",
    },
    container:{
        marginTop: 20,
    },
    noticeList: {
        paddingHorizontal: 10,
    },
    noticeCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 200,
    },
    noticeText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
    },
    
});


export default NoticeBoard;