import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../../global/theme";
import { styles } from "./style";
import ArrowIcon from '../../assets/arrowIcon.png'
import { AvatarProfile } from "../Avatar";
import Avatar from "../../assets/avatar.png"
import { Form } from "../Form";
import { MiniForm } from "../MiniForm";

type Props = {
    keyboardOpen?: boolean,

}

export function Forms({keyboardOpen} : Props){
    const [keyboard, set] = useState(false)
    return(
        < >
            <View style={styles.container}>
            <View style={styles.server}>
                {
                // <LinearGradient colors={[theme.colors.secondary85, theme.colors.secondary70]} style={styles.serverIcon}/>

                <AvatarProfile source={Avatar} stylel={styles.serverIcon}/>
                }
                <View style={styles.serverContainer}>
                    <Text style={styles.title}>
                        Adicionar Servidor
                    </Text>
                    <Image source={ArrowIcon} style={styles.icon}/>

                </View>
            </View>
            <View style={styles.box}>
                <MiniForm title='Dia e Mês'/>
                <MiniForm title='Hora'/>
            </View>
                <Form title="Descrição"/>
            </View>
        </>
    )
}