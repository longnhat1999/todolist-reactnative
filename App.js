import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.style';


export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    //Add task
    setTaskList([...taskList,task])
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index) => {
              return <Task />
            }) 
          }
        </ScrollView>
        
      </View>
      <View>
        <Form onAddTask = {handleAddTask}/>
      </View>
    </View>
  );
}
