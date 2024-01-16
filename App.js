import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header';

export default function App () {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name = 'My Awesome App' version={2}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
