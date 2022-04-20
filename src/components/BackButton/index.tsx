import { Image, TouchableOpacity, View, TouchableOpacityProps } from "react-native";
import React from "react";
import { styles } from "./style";
import BackPng from "../../assets/goBack.png";

interface Props extends TouchableOpacityProps {
    name: string;
}

export function BackButton({name, ...rest} : Props){
    return(
        <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        {...rest}
        >
            <Image source={BackPng} style={styles.backButtonImage}/>
        </TouchableOpacity>
    )
}