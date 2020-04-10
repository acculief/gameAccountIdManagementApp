import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function StackNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <Stack.Screen
        name="Links"
        component={LinksScreen}
        options={{ title: "Detail Screen" }}
      />
    </Stack.Navigator>
  );
}
