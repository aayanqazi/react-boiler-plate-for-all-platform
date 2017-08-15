import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.welcome}>
          Welcome To Arsalan Sabir
        </Text>
        </View>
        <Text style={styles.instructions}>
          Hello
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View style={styles.footer}>
          <Text>This is footer</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
    width:"100%",
    backgroundColor:"black"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:"white"
  },
  footer:{
    justifyContent:"flex-end"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});