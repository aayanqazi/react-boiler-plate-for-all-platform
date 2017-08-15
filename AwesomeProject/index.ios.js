/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from "./test";

AppRegistry.registerComponent('AwesomeProject', () => Router);

//This is what you pasted, code to start application in case of web
if (window.document) {
  AppRegistry.runApplication('AwesomeProject', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
  });
}
