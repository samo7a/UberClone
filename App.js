/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>

  );
};

const styles = StyleSheet.create({

});

export default App;
