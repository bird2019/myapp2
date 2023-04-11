import { StatusBar } from 'expo-status-bar';
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
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Teacher" component={TeacherScreen} />
      <Tab.Screen name="Student" component={StudentScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

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
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: true,
            title: '盛为学习',
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={({ route }) => ({
            title: route.name,
            headerStyle: {
              backgroundColor: '#FFC107',
            },
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
