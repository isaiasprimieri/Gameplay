import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../../global/theme";
import { styles } from "./style";

type Props = {
    title: string,
}

export function MiniForm({title} : Props){
    return(
        <View style={[styles.form]} >
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.box}>
                <LinearGradient colors={[theme.colors.secondary80, theme.colors.secondary60]} style={styles.input}>
                    <TextInput keyboardType="numeric" maxLength={2} style={[styles.title, styles.inputBox]}/>
                </LinearGradient>
                <View style={styles.divider}>
                    <Text style={styles.title}>
                        /
                    </Text>
                </View>

                <LinearGradient colors={[theme.colors.secondary80, theme.colors.secondary60]} style={styles.input}>
                    <TextInput keyboardType="numeric" maxLength={2} style={[styles.title, styles.inputBox]}/>
                </LinearGradient>

            </View>
        </View>
    )
}
