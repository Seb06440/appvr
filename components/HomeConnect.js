import * as React from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Pressable,
} from "react-native";
import { useContext } from "react";
import { userContext } from "../context/userContext";
function HomeConnect() {
  const { email } = useContext(userContext);
  console.log(email);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Vous éte connecté!</Text>
      <Text>Vous éte connecté!</Text>
      <Text>Vous éte connecté!</Text>
      <Text>Vous éte connecté!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default HomeConnect;
