import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);



  function receiveInput(data) {
    const newGoal = {text: data, id: Math.random()};
    setGoals([...goals, newGoal]);
    setIsModalVisible(false);
  }

  function dismissModal() {
    setIsModalVisible(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <FlatList 
          data={goals}
          renderItem={( {item }) => {
            return (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomView: { flex: 4, backgroundColor: "lightpink", alignItems: "center", justifyContent: "center" },
  text: { 
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "purple",
    color: "white",
    padding: 5,
    marginTop: 5,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: "purple",
    marginTop: 35,
  },
  scrollViewContent:{
    alignItems: "center",
  }
});