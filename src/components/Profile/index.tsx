import React from "react";
import { View, Text, Image} from "react-native";
import { ButtonAdd } from "../ButtonAdd";
import { styles } from "./style";
import Avatar from "../../assets/avatar.png";
import { AvatarProfile } from "../Avatar";

export function Profile(){

    return(
        <View style={styles.container}>
            <AvatarProfile source={Avatar}/>
            <View style={styles.content}>
                <View style={styles.text}>
                <Text style={styles.title}>
                    Olá,
                </Text>
                <Text style={styles.username}>
                    Username
                </Text>
            </View>
            <View style={styles.message}>
                <Text style={styles.messageText}>
                Hoje é dia de vitória
                </Text>
            </View>
            </View>
            <View style={styles.buttonAdd}>
                <ButtonAdd/>
            </View>
        </View>
    )
}