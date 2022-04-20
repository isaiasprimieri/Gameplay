import { Image, Text, TouchableOpacity, View, TouchableOpacityProps } from "react-native";
import React from 'react';
import { styles } from "./style";
import DiscordImg from "../../assets/discord.png"

interface Props extends TouchableOpacityProps {
    title: string,
    icon: boolean
}

export function ButtonLogin({title, icon,  ...rest} : Props){
    return(
        <View style={styles.container} >
            <TouchableOpacity
            activeOpacity={0.75}
            style={styles.button}
            {...rest}>
                    {icon ? <View style={ styles.iconWrapper}>
                        <Image
                        source={DiscordImg}
                        style={styles.iconImg}/>
                    </View> : <></>}
                    <View style={icon ? styles.textView : styles.textViewWithoutIcon}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}