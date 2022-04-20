import React, { useState } from "react";
import { View } from "react-native";
import { Categories } from "../../components/Categories";
import { Profile } from "../../components/Profile";
import { Constraint } from "../../components/Constraint";
import { styles } from "./style";
import { Background } from "../../components/Background";

type Props = {
    navigation: any
}

export function Home({navigation} : Props){

    return(
        <Background>
            <View style={[styles.container]} >
                <Profile/>
                <Categories/>
                <Constraint/>
            </View>
        </Background>
    )
}