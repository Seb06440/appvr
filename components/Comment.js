import React, { useState } from "react";
import PublicProfil from "./PublicProfil";
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import styles from "../styles/styles";
function Comment(props) {
  console.log(props);
  const [select, setSelect] = useState(false);
  function click() {
    setSelect(true);
  }
  function clickOff() {
    setSelect(false);
  }
  return (
    <View>
      {select ? (
        <View>
          <PublicProfil content={props.content.pseudo} />
          <Pressable
            //style={styles.signUpBtn}
            title="Pas encore inscrit??"
            onPress={() => clickOff()}
          >
            <Image
              style={styles.LikeLogo}
              source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/exitlogo.png")}
            ></Image>
          </Pressable>
        </View>
      ) : (
        <View>
          <Pressable
            //style={styles.signUpBtn}
            title="Pas encore inscrit??"
            onPress={() => click()}
          >
            <Text style={styles.text}>{props.content.pseudo}</Text>
          </Pressable>
          <Text style={styles.text}>{props.content.message}</Text>
        </View>
      )}
    </View>
  );
}

export default Comment;
