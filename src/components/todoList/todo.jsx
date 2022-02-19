import react from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    LayoutAnimation,
    NativeModules,
} from "react-native";
import { useState } from "react";
 

 
export default function Todo({ todoAdd }) {

    const [todoTitle, setTodoTitle] = useState('')
    const changeTextHandle = (e) => {
        setTodoTitle(e);
    }
    const addNewTodo = () => {
        let todo = {
            title: todoTitle,
            done: false
        }
        console.log(todo);
        alert("your Task is add");
        todoAdd(todo)
    }
    const clearHandle=()=>{
        setTodoTitle('')
    }

    return (
        <View>
            <Text
                style={{ textAlign: "center", color: "white", fontSize: 20, backgroundColor: "green" }}>
                   your Todo List
                    </Text>

            <TextInput
                style={{ textAlign: "center", color: "green", fontSize: 20 }}
                placeholder="enter your Tasks"
                value={todoTitle}
                onChangeText={changeTextHandle}
            />
            <TouchableOpacity
                onPress={addNewTodo}
                style={{width:"40%",textAlign:"center",marginLeft:100}}

            >
                <Text style={{ textAlign: "center", color: "white", fontSize: 20, backgroundColor: "green" }}>
                    Add your Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={clearHandle}
                style={{width:"40%",marginLeft:100}}

            >
                <Text style={{ textAlign: "center", color: "white", fontSize: 20, backgroundColor: "green" }}>Clear</Text>
            </TouchableOpacity>
        </View>
    )

}