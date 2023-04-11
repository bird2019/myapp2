import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class TeacherScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Teacher Screen</Text>
        <Button
          title="Go to Student screen"
          onPress={() => navigation.navigate('Student')}
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


