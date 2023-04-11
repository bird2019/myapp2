import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppLoading from './node_modules/expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import Icon from './node_modules/react-native-vector-icons/MaterialIcons';

import TeacherScreen from './src/screens/TeacherScreen';
import StudentScreen from './src/screens/StudentScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




// ...

const Stack = createStackNavigator();

// ...

const Tab = createBottomTabNavigator();

// ...


export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
  
    setFontsLoaded(true);
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
          name="Teacher"
          component={TeacherScreen}
          options={{
            title: 'Teacher',
            headerStyle: {
              backgroundColor: '#FFC107',
            },
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{
            title: 'Student',
            headerStyle: {
              backgroundColor: '#9C27B0',
            },
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />


    </NavigationContainer>
  );
}

