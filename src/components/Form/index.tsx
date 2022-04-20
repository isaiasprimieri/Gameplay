import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../../global/theme";
import { MiniForm } from "../MiniForm";
import { styles } from "./style";

type Props = {
    title: string,
}

export function Form({title} : Props){
    return(
        <View style={[styles.form]} >
            <View style={styles.box}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={styles.maxCaractersBox}>
                    <Text style={styles.maxCaracters}>
                        Max. 100 caracters
                    </Text>
                </View>
            </View>
                <LinearGradient colors={[theme.colors.secondary80, theme.colors.secondary60]} style={ styles.inputBox} >
                    <TextInput  maxLength={100} numberOfLines={5} autoCorrect={false} style={[styles.text, styles.input]}/>

                </LinearGradient>
        </View>
    )
}
