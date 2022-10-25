import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import HomeConnect from "./HomeConnect";
import { View } from "react-native";
import UserProvider from "../context/userContext";
function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator();
  const { email } = useContext(userContext);
  React.useEffect(() => {
    console.log(email);
  }, []);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="SignUp" component={HomeConnect} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
