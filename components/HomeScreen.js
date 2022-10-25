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
  ScrollView,
  Image,
} from "react-native";
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Post from "./Post";

import { userContext } from "../context/userContext";

function HomeScreen({ navigation }) {
  const { email, setEmail, profilPicture } = React.useContext(userContext);
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [postList, setPostListe] = React.useState([]);
  const image = {
    uri: "https://wallpaperaccess.com/full/1445467.jpg",
  };

  async function onClick() {
    const url = "http://192.168.1.19:3005/signin";

    const userInfo = {
      passWord: inputPassword,
      email: inputEmail,
    };
    const data = JSON.stringify(userInfo);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    let result = await response.json();
    const res = JSON.stringify(result);

    if (res !== '{"message":"Echec"}') {
      await AsyncStorage.setItem("Token", result);
      const token = await AsyncStorage.getItem("Token");

      console.log(token);
      setEmail(inputEmail);
    } else {
      console.log("Email ou MDP incorrect");
    }
  }
  async function getPosts() {
    const url = "http://192.168.1.19:3005/posts/allpost";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    const res = JSON.stringify(result);
    if (res !== '{"message":"Echec"}') {
      console.log("Message publié");
      console.log(result.posts);
      console.log(res);
      setPostListe(result.posts);
      // navigate("/");
    } else {
      console.log("Impossible d'envoyer un post");
    }
  }

  React.useEffect(() => {
    getPosts();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!email ? (
          <View style={styles.containerHome}>
            <Text style={styles.modalTitle}>Connection</Text>
            <Text style={styles.modalText}>Email</Text>
            <TextInput
              style={styles.inputModal}
              onChangeText={setInputEmail}
              value={inputEmail}
              placeholder="exemple@Imail.com"
              color="#07a8ff"
            />
            <Text style={styles.modalText}>Mots de passe</Text>
            <TextInput
              style={styles.inputModal}
              onChangeText={setInputPassword}
              value={inputPassword}
              placeholder="password"
              color="#07a8ff"
              secureTextEntry={true}
            />
            <Pressable
              style={styles.signUpBtn}
              title="Pas encore inscrit??"
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.textSignUpBtn}>Inscription </Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonValidate]}
              onPress={() => onClick()}
            >
              <Text style={styles.textStyle}>Valider</Text>
            </Pressable>
          </View>
        ) : (
          <View>
            <ScrollView>
              <View style={styles.containerUser}>
                <Image
                  style={styles.image2}
                  source={{
                    uri: `http://192.168.1.19:3005/images/${profilPicture}`,
                  }}
                ></Image>
                <Text style={styles.modalText}>{email}</Text>
              </View>

              {postList.map((item, key) => (
                <Post content={item} key={key} />
              ))}
            </ScrollView>
          </View>
        )}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
export default HomeScreen;
