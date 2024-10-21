import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  border: {
    marginVertical: 90,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
  },
  header: {
    marginVertical: 10,
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#9ACB7C",
    textAlign: "center",
  },
  form: {
    marginBottom: 24,
    marginHorizontal: 10,
  },
  formAction: {
    marginVertical: 24,
  },
  input: {
    marginTop: 16,
  },
  inputLabel: {
    fontSize: 17,
    color: "#222",
    marginBottom: 6,
  },
  inputControl: {
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 15,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 12,
  },
});
