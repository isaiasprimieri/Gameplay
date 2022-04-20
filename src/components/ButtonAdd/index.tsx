import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";

export function ButtonAdd(){
    const navigation = useNavigation()

    return(
        <TouchableOpacity  style={styles.container} activeOpacity={0.8} onPress={() => navigation.navigate('Appointment')}>
             <Ionicons name="add" size={32} color="white" style={styles.icon}/>
        </TouchableOpacity>
    )
}
