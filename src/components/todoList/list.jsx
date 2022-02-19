import { View, Text, FlatList, ScrollView } from "react-native";

import CheckBox from "expo-checkbox";


export default function TodoList({ list }) {


    return (
       
        <FlatList style={{height:"auto"}}
            data={list || []}
            
            renderItem={({ item: todo }) => (
                <View>
                    <Text style={{ textAlign: "center", color: "green", fontSize: 20 }}>{todo.title}</Text>
                    <CheckBox value={todo.done}
                        style={{ textAlign: "center", color: "green", fontSize: 20, marginLeft: 180 }} />
                </View>
            )}
            keyExtractor={(item, index) => `${index}`}
            ListHeaderComponent={() => <Text 
            style={{ textAlign: "center", color: "white", fontSize: 30, backgroundColor: "black" }}>
                 {/* {`${list.filter(i=>!i.done).length} are not finished of ${list.length}`}  */}
                 App List
                
            
                </Text>}
            ListFooterComponent={() => <Text
                style={{ textAlign: "center", color: "white", fontSize: 30, backgroundColor: "black", marginTop: 10 }}
            >End of list</Text>}
            ItemSeparatorComponent={() => <View ></View>}
            
        />
        

    )
}