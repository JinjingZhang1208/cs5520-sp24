import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-files/firebaseSetup";
import PressableButton from "./components/PressableButton";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Profile from "./components/Profile";

const Stack = createNativeStackNavigator();
export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // To manage loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
      setLoading(false); // Set loading to false once auth state is determined
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#929" },
          headerTintColor: "white",
        }}
      >
        {userLoggedIn ? (
          <Stack.Screen
            options={({ navigation }) => {
              return {
                headerTitle: "All My Goals",
                headerRight: () => (
                  <PressableButton
                    onPressFunction={() => {
                      navigation.navigate("Profile");
                    }}
                  >
                    <Ionicons name="person" size={24} color="white" />
                  </PressableButton>
                ),
              };
            }}
            name="Home"
            component={Home}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerRight: () => (
              <PressableButton
                onPressFunction={() => {
                  try {
                    signOut(auth);
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <AntDesign name="logout" size={24} color="white" />
              </PressableButton>
            ),
          }}
        />
        <Stack.Screen
          options={({ route }) => {
            return {
              headerTitle: route.params ? route.params.data.text : "Details",
            };
          }}
          name="Details"
          component={GoalDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});