import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

// Teacher screens
function TeacherScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Teacher Screen 1</Text>
    </View>
  );
}

function TeacherScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Teacher Screen 2</Text>
    </View>
  );
}

// Student screens
function StudentScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Student Screen 1</Text>
    </View>
  );
}

function StudentScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Student Screen 2</Text>
    </View>
  );
}

// Stack Navigator for Teacher screens
const TeacherStack = createStackNavigator();

function TeacherStackScreen() {
  return (
    <TeacherStack.Navigator>
      <TeacherStack.Screen name="TeacherScreen1" component={TeacherScreen1} />
      <TeacherStack.Screen name="TeacherScreen2" component={TeacherScreen2} />
    </TeacherStack.Navigator>
  );
}

// Stack Navigator for Student screens
const StudentStack = createStackNavigator();

function StudentStackScreen() {
  return (
    <StudentStack.Navigator>
      <StudentStack.Screen name="StudentScreen1" component={StudentScreen1} />
      <StudentStack.Screen name="StudentScreen2" component={StudentScreen2} />
    </StudentStack.Navigator>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Teacher" component={TeacherStackScreen} />
        <Tab.Screen name="Student" component={StudentStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
