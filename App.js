import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [entereGoal,setEnterGoal]=useState('')

  const addGoalHandler =()=>{
   console.log(entereGoal)
  }
  return (
    <View style={styles.container}>
      <Text>Hello Our First App</Text>
      <Button title="Add" onPress={addGoalHandler}>Add</Button>
    </View>
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
