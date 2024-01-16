import { StatusBar } from 'expo-status-bar'
import { StyleSheet,TextInput, View, text } from 'react-native'
import Header from './components/Header';
import { useState } from 'react';

export default function App () {
  const appName ='My Awesome app'
  const [text, setText] = useState("")
  
  // callback handler
  function changeTextHandler(changedText) {
    setText(changedText)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name = {appName} version={2} /> 
      <TextInput 
        placeholder='Type something'
        style={styles.input}
        value={text} 
        onChangeText={changeTextHandler} 
        />
    <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '50%',
  }
})
