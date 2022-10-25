import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./components/homeStacksScreen";
import SettingsStackScreen from "./components/SettingStackScreen";
import UserProvider from "./context/userContext";
import { useContext } from "react";
import { userContext } from "./context/userContext";
//const { email, setEmail } = useContext(userContext);
export default function App(props) {
  const [email, setEmail] = React.useState("");
  const [pseudo, setPseudo] = React.useState("");
  const [profilPicture, setProfilPicture] = React.useState("");

  const Tab = createBottomTabNavigator();
  React.useEffect(() => {
    async function getUser() {
      const token = await AsyncStorage.getItem("Token");
      console.log(token);
      const url = "http://192.168.1.19:3005/profil";
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
        setPseudo(result.profil.pseudo);
        setEmail(result.profil.email);
        setProfilPicture(result.profil.profilPicture);
      } else {
        console.log(result);
      }
    }

    getUser();
  }, []);
  return (
    <userContext.Provider
      value={{
        email,
        setEmail,
        pseudo,
        setPseudo,
        profilPicture,
        setProfilPicture,
      }}
    >
      {props.children}
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="FirstHome" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </userContext.Provider>

    //splash screen
  );
}
