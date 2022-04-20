import React from "react";
import {Text, View } from "react-native";
import { styles } from "./style";
import { BackButton } from "../BackButton";
import { useNavigation } from "@react-navigation/native";
import { Fontisto} from '@expo/vector-icons'
import { theme } from "../../global/theme";


type Props = {
    title: string
}

export function Header({title} : Props){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <BackButton
            name="back"
            onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.titleBox}>
                <Text style={styles.title}>
                    {title}
                </Text>
            <View style={styles.icon}>
                <Fontisto name="share" size={24} color={theme.colors.primary}/>
            </View>
            </View>


        </View>
    )
}