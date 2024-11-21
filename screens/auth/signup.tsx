import { ActivityIndicator, StyleSheet, Text, View, TextInput, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "@/assets/style/signinstyling";
import CustomButton from "@/components/Butons/CustomButton";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import {FirebaseError} from 'firebase/app'


const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  const signUp = async () => {
    setLoading(true);
    try{
        await auth().createUserWithEmailAndPassword(email, password);
        alert('Sign up successful');
    } catch (e: any) {
        const err = e as FirebaseError
        alert( 'Sign up failed' + err.message)
    } finally {
        setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{flex : 1, backgroundColor:"#e8ecf4"}}> 
      <View style={globalStyles.container}>
        <View style = {globalStyles.border}>
        <View style={globalStyles.header}>
          <Image 
          source={require('@/assets/images/profile-icon.png')}
          style ={globalStyles.headerImg}
          />
          <Text style={globalStyles.title}>Sign Up</Text>
        </View>
        <View style ={globalStyles.form}>
          <View style = {globalStyles.input}>
            <Text 
              style = {globalStyles.inputLabel}>Email address
            </Text> 
            <TextInput
             autoCapitalize="none"
             autoCorrect={false}
             keyboardType="email-address"
             placeholder="example@gmail.com"
             placeholderTextColor="#6b7280"
             style={globalStyles.inputControl}
             value={email}
             onChangeText={setEmail}
            />
            <Text 
            style = {globalStyles.inputLabel}>Password
            </Text>
            <TextInput
             placeholder="***************"
             placeholderTextColor="#6b7280"
             value={password}
             onChangeText={setPassword}
             secureTextEntry
             style={globalStyles.inputControl}
            />
            
            
          </View>
          <View style={globalStyles.formAction}> 
          {loading ? (
              <ActivityIndicator size="large" style={{marginBottom: 10}} />)
            : (
              <>
              <CustomButton
              title="Sign Up"
              onPress={signUp}
              buttonStyle={{backgroundColor: "#C6ECAE"}}
            />

            <CustomButton
              title="Back to Login"
              onPress={() => router.push("/login")}
              buttonStyle={{backgroundColor: "#C6ECAE",marginTop: 10}}
            />
               </>
            )}
            
          </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default SignUp;
