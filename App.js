import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LanguageScreen from "./Screens/LangaugeScreen";
import SectionsScreen from "./Screens/SectionsScreen";
import DetailsScreen from "./Screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Language"
          component={LanguageScreen}
        />
        <Stack.Screen
          name="Sections"
          component={SectionsScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 