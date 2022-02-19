import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,ScrollView ,Image} from 'react-native';
import {useState} from'react'

export default function Header() {
    const [text, setText] = useState('');
    const handle = (e) => {
        setText(e)
    }
    return (
        <View>
            <Text style={{ color: 'blue', marginBottom: 5 }} > your name :{text}</Text>
            <TextInput

                value={text}
                onChangeText={handle}
            />
            <Button title='click'
                onPress={() => {
                    setText('')
                }}
            />
        </View>
    )

}