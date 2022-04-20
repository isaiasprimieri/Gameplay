import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityBase, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../global/theme";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    title: string,
    source: any,
    checked ?: boolean,
    select: string,
    checkBox?: boolean
}

export function Sections({
    title,
    source,
    checked = false,
    checkBox = false,
    ...rest
} : Props){
    const [check, checker] = useState(false)
    checked = check
    return(
       <TouchableOpacity activeOpacity={0.85} onPress={() => checker( check === false ? true : false)}>
            <LinearGradient colors={[theme.colors.secondary80, theme.colors.secondary60]} style={[styles.container, {opacity: checked ? 1 : 0.75, borderColor: checked ? theme.colors.secondary40 : 'transparent', borderWidth: 2}]}>
                {
                    checkBox &&
                    <View style={checked ? styles.check : styles.checked}/>
                    }
                <Image style={styles.icons}  source={source}/>
                <View style={styles.indentifer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}