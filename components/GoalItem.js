import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GoalItem({ goalObj, deleteFunction}) {
    function deleteHandler() {  
        deleteFunction();
    }
    return (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{goalObj.text}</Text>
          <Button color="gray" title="X" onPress = {deleteHandler} />
        </View>
      )
}

const styles = StyleSheet.create({
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
        marginTop: 15,
        flexDirection: "row",
        alignContent: "center",
      },
})