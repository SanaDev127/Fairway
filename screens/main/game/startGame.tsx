import React from 'react';
import { useEffect } from 'react';
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Modal, FlatList } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';
import { ListItem } from '@rneui/themed';
import CalendarPicker from 'react-native-calendar-picker';
import { useCourseApi } from '@/hooks/Api/CourseApi';
import { useUserApi } from '@/hooks/Api/UserApi';
import { User } from '@/hooks/Types/UserTypes';
import { coursesData } from "@/constants/Data";


const playerdata = [
    { playerId: '1', displayName: 'Motheo' },
    { playerId: '2', displayName: 'Masana' },
    { playerId: '3', displayName: 'Tlotlo' },
];

const StartGame = () => {
    const router = useRouter();
    
    useEffect(() => {
        getAllCourses();
        getAllBuddies({userId:"672f5cce843765e9988738b1",});
        getUser({userId:"672f5cce843765e9988738b1",});
      }, []);
      

    const [course, setCourse] = React.useState('');
    const [participant, setParticipant] = React.useState('');
    const [participantList, setParticipantList] = React.useState<string[]>([]);
    
    const [open, setOpen] = React.useState(false); //open and close modal
    const [selectedStartDate, setSelectedStartDate] = React.useState(null);
    const [selectedEndDate, setSelectedEndDate] = React.useState(null);
    const [hideContent, setHideContent] = React.useState(false);
    const minDate = new Date();
    
    //const userId ="508213e1-f029-4418-87fd-56bdff02d4aa";
    const userId ="672f5cce843765e9988738b1";

    const { getCourses: { query: getAllCourses, data: courseData, isLoading: getAllCoursesLoading }} = useCourseApi();
    const { getUser: {mutation: getUser, data: getUserData, isLoading: getUserLoading}} = useUserApi();
    const { getAllBuddies: {mutation: getAllBuddies, data: getAllBuddiesData, isLoading: getAllBuddiesLoading}} = useUserApi(); 


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



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
            <View style={globalStyles.container}>
                <View style={globalStyles.border}>
                    <View style={styles.container} >
                        <Text style={{ marginBottom: 25, alignSelf: 'center' }}>Course:</Text>
                        <Dropdown
                            style={styles.dropdown2}
                            data={coursesData}
                            labelField={"courseName"}
                            valueField={"value"}
                            placeholder='Search'
                            value={course}
                            search
                            searchPlaceholder='Search...'
                            onChange={item => {
                                setCourse(item.courseName);
                                console.log(item.courseName);
                            }}
                        />

                        

                        {/* CheckBox to toggle content visibility */}
                        <CheckBox
                            checked={hideContent}
                            onPress={() => setHideContent(!hideContent)}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon="checkbox-blank-outline"
                            title="Past game"
                            center
                            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                            wrapperStyle={{ backgroundColor: 'transparent' }}
                            
                            
                        />

                        <View style={styles.dropdownContainer}>
                            <View>

                                <Text>
                                    Date
                                </Text>

                                <TextInput 
                                    editable={false}
                                    style={styles.textBox}
                                    value ={`${formatDate(selectedStartDate)} to ${formatDate(selectedEndDate)}`}
                                    textAlign='center'
                                    />

                            </View>

                            <CustomButton 
                                onPress={OpenDatepicker}
                                title='Open'
                                buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 20}}/>

                            <Modal
                                animationType='slide'
                                transparent={true}
                                visible={open}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalContainer}>
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
                                            title='Open'
                                            buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>

                                    </View>
                                </View>

                            </Modal>
                        </View>

                        {/* Conditional rendering of additional content */}
                        {!hideContent && (
                            <View style={styles.container}>
                                <Text>Participants:</Text>
                                {/* <Dropdown
                                        style={styles.dropdown2}
                                        data={getUserData ?? []}
                                        labelField={"name"}
                                        valueField={"id"}
                                        placeholder='Select Participant'
                                        value={participant}
                                        search
                                        searchPlaceholder='Search...'
                                        onChange={item => {
                                            setParticipant(item.name);
                                            console.log(item.name);
                                        }}
                                    /> */}

                                <View style={styles.container}>
                                    {/* <Dropdown
                                        style={styles.dropdown2}
                                        data={getAllBuddiesData ?? []} 
                                        labelField={"name"}
                                        valueField={"userID"}
                                        placeholder='Participant'
                                        value={participant}
                                        search
                                        searchPlaceholder='Search...'
                                        onChange={item => {
                                            setParticipant(item.name);
                                            // setParticipantList([...participantList, item.name]);
                                            console.log(item.id);
                                            
                                        }}
                                    /> */}

                                    <View>
                                        {/* <FlatList
                                            data ={searchData}
                                            renderItem={({item}) => (    
                                            <View style={styles.itemContainer}>
                                                <Text style={styles.item}>{item.name}:</Text>
                                                <Text style={styles.item}>Course: {item.course || "Course Name"}</Text>
                                                <Text style={styles.item}>Date: {item.date || "Game Date"}</Text>
                                                <Text style={styles.item}>Score: {item.score || "User's Score"}</Text>
                                            </View>
                                            )}
                                            keyExtractor={(item) => item.id}
                                            /> */}
                                        {/* <Text style={{ marginBottom: 25, alignSelf: 'center' }}>Participants:</Text>
                                        <FlatList
                                            data={participantList}
                                            renderItem={({ item }) => (
                                            <View>
                                                <Text>{item}</Text>
                                            </View>
                                            )}
                                        /> */}
                                    </View>

                                </View>
                                <View style={ styles.radioBtnContainer}>
                                    <CheckBox
                                        checked={hideContent}
                                        onPress={() => console.log("Stroke play Checked")}
                                        iconType="material-community"
                                        checkedIcon="checkbox-outline"
                                        uncheckedIcon="checkbox-blank-outline"
                                        title="Stroke Play"
                                        center
                                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                        wrapperStyle={{ backgroundColor: 'transparent' }}        
                                        />

                                    <CheckBox
                                        checked={hideContent}
                                        onPress={() => console.log("Match play Checked")}
                                        iconType="material-community"
                                        checkedIcon="checkbox-outline"
                                        uncheckedIcon="checkbox-blank-outline"
                                        title="Match Play"
                                        center
                                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                        wrapperStyle={{ backgroundColor: 'transparent' }}
                                    />
                                </View>
                            </View>
                        )}

                            <CustomButton 
                                onPress={()=> console.log("Begin button clicked")}
                                title='Begin'
                                buttonStyle={{backgroundColor: "#C6ECAE", 
                                alignSelf: "center", 
                                marginTop: 100,
                                paddingVertical: 20,
                                paddingHorizontal: 40}}/>

                                {/* <CustomButton 
                                    onPress={()=> getUser()}
                                    title='Begin'
                                    buttonStyle={{backgroundColor: "#C6ECAE", 
                                    alignSelf: "center", 
                                    marginTop: 100,
                                    paddingVertical: 20,
                                    paddingHorizontal: 40}}/> */}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    container:{
        marginTop: 20,
    },
    profileimg: {
        width: 150,
        height: 150,
        alignSelf: "center",
    },
    btnContainer: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dropdown: {
        margin: 16,
        height: 50,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    dropdown2: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalContainer: {
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
    radioBtnContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
});

export default StartGame;
