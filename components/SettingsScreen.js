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
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
function SettingsScreen({ navigation }) {
  const { email, setEmail } = useContext(userContext);

  function onClick() {
    AsyncStorage.removeItem("User");
    setEmail("");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      {email ? (
        <Pressable
          style={[styles.button, styles.buttonValidate]}
          onPress={() => onClick()}
        >
          <Text style={styles.textStyle}>Deco</Text>
        </Pressable>
      ) : (
        <Button
          title="Contact"
          onPress={() => navigation.navigate("Details")}
        />
      )}
    </View>
  );
}

export default SettingsScreen;
