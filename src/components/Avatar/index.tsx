import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image} from "react-native";
import { theme } from "../../global/theme";
import { styles } from "./style";

type Props = {
    source: any,
    stylel?: any
}

export function AvatarProfile({source, stylel} : Props){
    return(
            <LinearGradient colors={[theme.colors.secondary60, theme.colors.secondary40] } style={styles.avatar}>
                <Image source={source} style={[styles.avatarImg, stylel ]} />
            </LinearGradient>
    )
}