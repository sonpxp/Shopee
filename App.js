import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import SignUpScreen from './screen/SignUpScreen';
import ServiceScreen from './screen/ServiceScreen';
import CartScreen from './screen/CartScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='Login'
            component = {LoginScreen}
            options={{
              title: 'Login',
              headerShown: false
            }}
        />
       
        <Stack.Screen
            name='SignUp'
            component = {SignUpScreen}
            options={{
              title: '',
            }}
        />
        <Stack.Screen
            name='Service'
            component = {ServiceScreen}
            options={{
              title: 'Service',
            }}
        />
        <Stack.Screen
            name='Cart'
            component = {CartScreen}
            options={{
              title: '🛒 Cart',
            }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
