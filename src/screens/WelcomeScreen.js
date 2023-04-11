import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you a Teacher or a Student?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Teacher')}
      >
        <Text style={styles.buttonText}>Teacher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Student')}
      >
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
    </View>
  );
}

//以下后加，解决上面的Teacher和Student导航到的页面，未验证。
const stackNavigator = createStackNavigator({
  Teacher: {
    screen: TeacherScreen
  },
  Student: {
    screen: StudentScreen
  }
});

export default stackNavigator;
//以上

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFC107',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
