import CustomButton from "@/components/Butons/CustomButton";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useCourseApi } from "@/hooks/api";

const App = () => {
  const router = useRouter();
  const {
    getCourses: { query: getAllCourses, data, isLoading },
  } = useCourseApi();

  const handleSubmit = async () => {
    await getAllCourses();
    console.log("Button pressed");
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View>
        <CustomButton onPress={handleSubmit} title="Get Started" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
