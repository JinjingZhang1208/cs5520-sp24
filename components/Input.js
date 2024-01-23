import { StyleSheet, Text, TextInput, View, Button, Modal, Image } from "react-native";
import React, { useState } from "react";

export default function Input({inputHandler, modalVisible, dismissModal}) {
  const [text, setText] = useState("");
  // callback handler
  function changeTextHandler(changedText) {
    console.log("user is typing ", changedText);
    setText(changedText);
  }

  function confirmHandler() {
    inputHandler(text);
  }

  function cancelHandler() {
    dismissModal();
  }

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image source={require("../assets/WechatIMG111.jpg")} style={styles.image}/>
        <TextInput
          placeholder="Type something"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        />
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button title="confirm" onPress={confirmHandler} />
        </View>
        <View style={styles.button}></View>
        <Button title="cancel" onPress={cancelHandler}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {width:100, height: 100},
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: 6,
  }
});