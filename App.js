import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './components/Home';
import GoalDetails from './components/GoalDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  
  const Stack = createStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: 'lightblue'},
        headerTintColor: 'blue', }}>
      <Stack.Screen options={{title: 'All my goals'}} name="Home" component={Home} />
      <Stack.Screen
      name="Details"
      component={GoalDetails}
      options={({ route }) => {return {
        title: route.params.goalData.text
      }}}
    />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})