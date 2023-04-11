import Constants from 'expo-constants';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TeacherScreen from './src/screens/TeacherScreen';
import StudentScreen from './src/screens/StudentScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useHeaderHeight } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const [isReady, setIsReady] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('Teacher');

  if (!fontsLoaded || !isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  function loadFonts() {
    // Your code to load fonts
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Teacher"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
          },
          indicatorStyle: {
            backgroundColor: '#e91e63',
          },
          style: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Tab.Screen name="Teacher" component={TeacherScreen} />
        <Tab.Screen name="Student" component={StudentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
