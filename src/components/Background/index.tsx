import React, {ReactNode} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { styles } from "./style";

type Props = {
    children: ReactNode
}

export function Background({children} : Props){
    return(
        <LinearGradient colors={[theme.colors.secondary90 , theme.colors.secondary100]} style={styles.container}>
            {children}
        </LinearGradient>
    )
}
