import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import BottomSheet from "../Components/BottomSheet";
import CheckBox from "../Components/CheckBox";
import CollapsibleCard from "../Components/CollapsibleCard";
import ColorPicker from "../Components/ColorPicker";
import IconPicker from "../Components/IconPicker";
import ModalInput from "../Components/ModalInput";
import RadioGroup from "../Components/RadioGroup";
import Separator from "../Components/Separator";
import Tag from "../Components/Tag";

import translations from '../localizations/es.json';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={translations.titleHome} component={Home} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="CheckBox" component={CheckBox} />
        <Stack.Screen name="CollapsibleCard" component={CollapsibleCard} />
        <Stack.Screen name="ColorPicker" component={ColorPicker} />
        <Stack.Screen name="IconPicker" component={IconPicker} />
        <Stack.Screen name="ModalInput" component={ModalInput} />
        <Stack.Screen name="RadioGroup" component={RadioGroup} />
        <Stack.Screen name="Separator" component={Separator} />
        <Stack.Screen name="Tag" component={Tag} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
