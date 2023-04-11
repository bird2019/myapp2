import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class StudentScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Student Screen</Text>
        <Button
          title="Go to Teacher screen"
          onPress={() => navigation.navigate('Teacher')}
        />
      </View>
    );
  }
}

const stackNavigator = createStackNavigator({
    Teacher: {
      screen: TeacherScreen
    },
    Student: {
      screen: StudentScreen
    }
});


