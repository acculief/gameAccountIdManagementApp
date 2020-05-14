import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import NewAccountScreen from "../screens/NewAccountScreen";
import SelectedAccountScreen from "../screens/SelectedAccountScreen";
import SelectedGameScreen from "../screens/SelectedGameScreen";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function StackNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.tintColor,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "ゲーム一覧",
        }}
      />
      <Stack.Screen
        name="NewAccount"
        component={NewAccountScreen}
        options={{ title: "新規作成" }}
      />
      <Stack.Screen name="SelectedGame" component={SelectedGameScreen} />
      <Stack.Screen name="SelectedAccount" component={SelectedAccountScreen} />
    </Stack.Navigator>
  );
}
