import CustomButton from "@/components/Butons/CustomButton";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View>
        <CustomButton onPress={() => console.log("tap")} title="Get Started"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})

export default App
