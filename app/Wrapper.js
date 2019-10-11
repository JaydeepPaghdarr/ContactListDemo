import React, { Component } from "react";

import {
  Button,
  Text,
  TextInput
} from "react-native";

import App from "./App";

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

if (Button.defaultProps == null) Button.defaultProps = {};
Button.defaultProps.allowFontScaling = false;

class Wrapper extends React.Component {
  render() {
    return (
      <App></App>
    );
  }
}

export default Wrapper;