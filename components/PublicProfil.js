import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function PublicProfil(props) {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [interest, setInterest] = useState("");
  const [country, setCountry] = useState("");
  const [profilPicture, setProfilPicture] = useState("");
  const [profilLike, setProfilLike] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    async function getUser() {
      const user = props.content;
      const token = await AsyncStorage.getItem("Token");
      const url = `http://192.168.1.19:3005/publicuser/${user}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      };
      const response = await fetch(url, options);

      let result = await response.json();

      console.log(result);

      if (result.profil.email) {
        console.log(result);
        setEmail(result.profil.email);
        setPseudo(result.profil.pseudo);
        setName(result.profil.name);
        setFirstName(result.profil.firstName);
        setAge(result.profil.age);
        setDescription(result.profil.description);
        setInterest(result.profil.interest);
        setCountry(result.profil.country);
        setProfilPicture(result.profil.profilPicture);
        setProfilLike(result.profil.profilLike);
        setDate(result.profil.date);
      } else {
        console.log(result);
      }
    }
    getUser();
  }, [email]);
  return (
    <View>
      <Text style={styles.text}>{pseudo}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `http://192.168.1.19:3005/images/${profilPicture}`,
        }}
      ></Image>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{firstName}</Text>
      <Text style={styles.text}>{age}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{interest}</Text>
      <Text style={styles.text}>{profilLike.length}</Text>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 65,
  },
  text: {
    color: "whitesmoke",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    border: "rounded-circle",
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
export default PublicProfil;
