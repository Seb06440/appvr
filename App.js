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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const image = {
    uri: "https://wallpaperaccess.com/full/1445467.jpg",
  };

  function onClick() {}
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerHome}>
          <Text style={styles.modalTitle}>Connection</Text>
          <Text style={styles.modalText}>Email</Text>
          <TextInput
            style={styles.inputModal}
            onChangeText={setEmail}
            value={email}
            placeholder="exemple@Imail.com"
            color="#07a8ff"
          />
          <Text style={styles.modalText}>Mots de passe</Text>
          <TextInput
            style={styles.inputModal}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
            color="#07a8ff"
            secureTextEntry={true}
          />
          <Pressable
            style={styles.signUpBtn}
            title="Pas encore inscrit??"
            onPress={() => navigation.navigate("Details")}
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
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 65,
  },
  containerHome: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#07a8ff",
  },
  buttonValidate: {
    backgroundColor: "#07a8ff",
  },
  buttonClose: {
    backgroundColor: "orange",
    bottom: 250,
    left: 150,
  },
  signUpBtn: {
    left: 100,
    bottom: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 400,
  },
  textStyle: {
    color: "whitesmoke",
  },
  textSignUpBtn: {
    color: "#07a8ff",
  },
  modalText: {
    textAlign: "center",
    color: "whitesmoke",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalTitle: {
    textAlign: "center",
    color: "whitesmoke",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  inputModal: {
    width: 300,
    height: 40,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    backgroundColor: "whitesmoke",
  },
});
