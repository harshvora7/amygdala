import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  AppRegistry,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> Amygdala</Text>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.questions}>
        Lets get started by answering a few questions!
      </Text>
      {/* <View style={styles.bottom}>
        <Button style={styles.button} title="Continues" color="#13A590" />
      </View> */}
      <TouchableOpacity style={styles.bottom} activeOpacity={0.5}>
        <Text style={styles.TextStyle}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#76CBC4",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottom: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "flex-end",
    marginBottom: 36,
    backgroundColor: "#13A590",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#13A590",
  },
  name: {
    color: "#fff",
    fontSize: 70,
    position: "absolute",
    top: 100,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Roboto",
  },
  questions: {
    position: "absolute",
    top: 500,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
  welcome: {
    position: "absolute",
    top: 300,
    fontFamily: "Roboto",
    fontSize: 50,
    color: "#fff",
    alignSelf: "center",
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35,
  },
});
export default WelcomeScreen;
