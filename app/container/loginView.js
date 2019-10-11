/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import {facebookService} from './FacebookService'


export default class loginView extends Component<Props> {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this)
    
  }

  login() {
    this.props.navigation.navigate('contact')
  }

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
         <View>
         {facebookService.makeLoginButton((accessToken) => {
          this.login()
        })}
      </View>
      <View style={styles.skipView}>
          <TouchableOpacity onPress={() => {
                this.login();
              }}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  skipView:{
      marginTop: 30
  },
  skipText:{
    color: "gray",
    fontSize: 15
  }
});

