import { ActivityIndicator, StyleSheet, Text, View, TextInput, SafeAreaView, Image } from "react-native";
import { globalStyles } from "@/assets/style/signinstyling";
import React, { useState } from "react";
import CustomButton from "@/components/Butons/CustomButton";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import {FirebaseError} from 'firebase/app'

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const signIn = async () => {
    setLoading(true);
    try{
        await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
        const err = e as FirebaseError
        alert( 'Sign in failed' + err.message)
    } finally {
        setLoading(false);
    }
  };

  return (
  <SafeAreaView style={{flex : 1, backgroundColor:"#e8ecf4"}}>
    <View style={globalStyles.container}>
      <View style={globalStyles.border}>
        <View style={globalStyles.header}>
          <Image 
          source={require('@/assets/images/fairway-logo.webp')}
          style ={globalStyles.headerImg}
          />
          <Text 
          style={globalStyles.title}>Login for your account
          </Text>
          <Text
          style={globalStyles.subtitle}>Get access your profile and enter the world of golfing with Fairway.
          </Text>
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
            style={globalStyles.inputControl}
            placeholder="***************"
            placeholderTextColor="#6b7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
          </View>
          <View style={globalStyles.formAction}>
            {loading ? (
              <ActivityIndicator size="large" style={{marginBottom: 10}} />)
            : (
              <>
              <CustomButton
            title="Login"
            onPress={signIn}
            buttonStyle={{backgroundColor: "#C6ECAE"}}
            />

            <CustomButton
            title="Sign Up"
            onPress={() => router.push("/signup")}
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


export default Login;
