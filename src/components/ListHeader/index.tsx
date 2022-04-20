import React from "react"
import { View, Text} from 'react-native'
import { styles } from "./style"

type Props = {
    title: string,
    subTitle: string
}

export function ListHeader({title, subTitle} : Props){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <View style={styles.subtitleBox}>
            <Text style={styles.subtitle}>
                {subTitle}
            </Text>
        </View>
    </View>
    )

}