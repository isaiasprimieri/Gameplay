import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../global/theme";
import { styles } from "./style";
import { CheckBox } from 'react-native-elements'

interface Props extends TouchableOpacityProps {
    title: string,
    source: any,
    checked: boolean,

}

export function SectionsSelect({title , source, checked, ...rest} : Props){
    return(
        <TouchableOpacity style={[styles.container, checked ? styles.background : styles.background1]}>
            <Image style={styles.icons}  source={source}/>
            <CheckBox/>
            <View style={styles.indentifer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}