import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image } from 'react-native';
import { useState } from 'react'
import Slider from './src/components/slider/slider';
import Header from './src/components/header/header';
import Todo from './src/components/todoList/todo';
import AddTodo from './src/components/todoList/addToDo';
import TodoList from './src/components/todoList/list';


export default function App() {


  return (

    <View   >
      <StatusBar style="auto" />
      <Header />
      <Slider />
      <AddTodo />
     
     
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // opacity=0.2
  },



});
