import SettingsScreen from "./SettingsScreen";
import DetailsScreen from "./DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
function SettingsStackScreen() {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Setting" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
export default SettingsStackScreen;
