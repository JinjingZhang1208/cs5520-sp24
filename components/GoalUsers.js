import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function GoalUsers() {
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error("data wasn't there!"); //automatically exits
                }   
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        
        fetchUsers();
    }, []);

return (
    <View>
      <Text>GoalUsers</Text>
    </View>
  )
}

const styles = StyleSheet.create({})