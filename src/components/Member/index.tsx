import React, { useState } from "react";
import { View } from "react-native";
import { AvatarProfile } from "../Avatar";
import AvatarImg from "../../assets/avatar.png"
import { styles } from "./style";
import { theme } from "../../global/theme";

export type MemberProps = {
    id?: string,
    username?: string,
    status: 'online' | 'offline' ,
    avatar_url: string,
}



export function Member({id, username, status = 'offline', avatar_url} : MemberProps){
    const {on, primary} = theme.colors
    const isOnline = status === 'online'


    return(
        <View style={styles.container}>
            <AvatarProfile stylel={styles.avatar} source={avatar_url} />
            <View style={styles.statusBox}>
                <View style={[
                    styles.status,
                    isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'}
                ]}/>
            </View>
        </View>
    )
}