//Pheona Fabro, Cheramie Perocho, Loraine Baslao
//IT35-C IT83
//February 26, 2024
//The code represents a React Native application with an App component displaying a welcome message, an image, a bolded counter with +/- buttons, and a list of bolded greetings for specific users. The application is structured into modular components such as Counter, Username, and HelloWorld, each with its own functionality and styling.
import { View, Text } from 'react-native';
import React from 'react';

const GreetUser = ({ username }) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Hello, {username}!</Text>
    </View>
  );
};

const Username = () => {
  return (
    <View>
      <GreetUser username="Pheona" />
      <GreetUser username="Cheramie" />
      <GreetUser username="Loraine" />
    </View>
  );
};

export default Username;
