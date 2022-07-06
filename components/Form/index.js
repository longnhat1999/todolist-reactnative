import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import styles from './style'

const Form = () => {
  const [task, setTask] = useState('')
  const handleAddTask= () => {
    if(task.length === 0){
      alert('Vui lòng nhập công việc!')
      return false;
    }
    alert(task);
  }
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput 
        placeholder='Your Task'
        onChangeText={setTask}
        // onChangeText={(text) => setTask(text)} 
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Form