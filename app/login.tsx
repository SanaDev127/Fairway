import { StyleSheet, Text, View, TextInput, SafeAreaView, Image } from "react-native";
import { globalStyles } from "@/assets/style/signinstyling";
import React, { useState } from "react";
import CustomButton from "@/components/Butons/CustomButton";
import { useRouter } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
  <SafeAreaView style={{flex : 1, backgroundColor:"#1D963F"}}>
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
            value={username}
            onChangeText={setUsername}
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
            <CustomButton
            title="Login"
            onPress={() => router.push("/home")}
            buttonStyle={{backgroundColor: "#C6ECAE"}}
            />

            <CustomButton
            title="Sign Up"
            onPress={() => router.push("/signup")}
            buttonStyle={{backgroundColor: "#C6ECAE",marginTop: 10}}
            />
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};


export default Login;
