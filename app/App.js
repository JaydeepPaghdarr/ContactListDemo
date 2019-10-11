import React, { Component } from 'react';

import { StackNavigator } from "react-navigation";

import loginView from "./container/loginView";
import contactList from "./container/contactList";

console.disableYellowBox = true;

const App = StackNavigator(
  {
    login: {
      screen: loginView,
      navigationOptions: {
        header: null
      }
    },
    contact: {
      screen: contactList,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "login",
    navigationOptions: {
      header: null
    }
  }
);

export default App;