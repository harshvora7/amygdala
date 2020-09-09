import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  AppRegistry,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> Amygdala</Text>
      <TouchableOpacity style={styles.bottom} activeOpacity={0.5}>
        <Text style={styles.TextStyle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom} activeOpacity={0.5}>
        <Text style={styles.TextStyle}>Signup</Text>
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
    paddingLeft: 60,
    paddingRight: 60,
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
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35,
  },
});
export default WelcomeScreen2;
