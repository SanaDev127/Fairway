import CustomButton from "@/components/Butons/CustomButton";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import {FirebaseError} from 'firebase/app'


const App = () => {
  const router = useRouter();


  return (
    <SafeAreaView style={{flex: 1}}>

        <View style={[
          styles.container, {
            flexDirection: 'column',
          }]}>
          <Image 
            source={require('@/assets/images/fairway-logo.webp')}
            style ={styles.headerImg}
            />
          <Text style={styles.loadingText}>Welcome to Fairway</Text>
          <View>
            <CustomButton 
              onPress={() => router.push("/login")} // Navigate to login page
              title="Get Started"
              buttonStyle={{backgroundColor: "#C6ECAE"}}
            />
          </View>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#D8A47F",
    padding: 24,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: "#008854",
  },
  headerImg: {
    width: 100,
    height: 100,
  }
});

export default App