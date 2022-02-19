import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,ScrollView ,Image} from 'react-native';
import {useState} from 'react'

 export default function  Slider() {
    const[img,setImg]=useState(0);
    const image=[
      'https://media.istockphoto.com/photos/graphic-designer-drawing-on-graphics-tablet-at-workplace-picture-id865230556?k=20&m=865230556&s=612x612&w=0&h=yaMgJpncw6ngPbwm9Z25bMBK3PZ42lVO5z7dZUojiew=',
      'https://image.shutterstock.com/image-photo/graphic-design-studio-260nw-695759755.jpg',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80'
    ]


    return (
        <View   >
              <Image
              source={{uri:image[img]}}
             style={{width:500,height:200}}
              />
              <Button
               title='next'
               onPress={()=>{
                 if(img==image.length-1){
                  setImg(image.length-1)
                 }
                 else{
                 setImg(img+1)
                 }
               }}
               
              
            />
            <Button
               title='per'
               
               onPress={()=>{
                 if(img==0){
                  setImg(0)
                 
                 }
                 else{
                 setImg(img-1)
                 }
               }}
               
              
            />
         
          
          <StatusBar style="auto" />
         
        </View>
         
        
      );


 }
 