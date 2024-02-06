import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GoalItem({ goalObj, deleteFunction, detailFunction}) {
    function deleteHandler() {  
        deleteFunction(goalObj.id);
    }
    return (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{goalObj.text}</Text>
          <Button color="gray" title="X" onPress = {deleteHandler} />
          <Button color="gray" title="I" onPress = {()=>detailFunction(goalObj)} />
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