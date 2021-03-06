import React from "react";
import {Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/Header'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
      headerMode:'screen',
    }}
  >
    <Screen
      options={{
        headerTitle: () => <Header title={"Game Zone"}/>,
        headerBackground: ()=> <Image source={require("../assets/game_bg.png")} style={{height:"100%"}}/>,
        headerTitleAlign:'center'
      }}
      name="Home"
      component={Home}
    />
    <Screen
      name="Details"
      component={ReviewDetails}
    />
  </Navigator>
);

export const HomeStack = () => (
    <HomeNavigator />
);

export default HomeStack;
