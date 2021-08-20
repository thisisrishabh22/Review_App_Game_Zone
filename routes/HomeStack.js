import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/Header'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitle: () => <Header/>,
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
      headerMode:'screen',
    }}
  >
    <Screen
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
