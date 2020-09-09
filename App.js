import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import WelcomeScreen2 from "./app/screens/welcomeScreen2";
import question1 from "./app/screens/question1";
export default function App() {
  return <WelcomeScreen2></WelcomeScreen2>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
