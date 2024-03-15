//Pheona Fabro, Cheramie Perocho, Loraine Baslao
//IT35-C IT83
//February 26, 2024
//The code represents a React Native application with an App component displaying a welcome message, an image, a bolded counter with +/- buttons, and a list of bolded greetings for specific users. The application is structured into modular components such as Counter, Username, and HelloWorld, each with its own functionality and styling.
import { View, Text, Image } from 'react-native';
import React from 'react';

const HelloWorld = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
      <Image
        source={require('./pcl.jpg')} 
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default HelloWorld;