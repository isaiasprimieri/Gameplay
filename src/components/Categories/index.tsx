import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Sections } from "../Sections";
import { styles } from "./style";
import Ranked from "../../assets/ranked.png"
import Fun from "../../assets/fun.png"
import Duelo from "../../assets/armas.png"
import Pratice from "../../assets/pratice.png"

type Props = {
    hasCheckBox?: boolean
}

export function Categories({hasCheckBox=false} : Props){

    return(
        <View >
            <Text style={styles.title}>
                Categorias
            </Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle={{paddingRight: 20, paddingLeft: 12}}>
                <View style={styles.container}>
                    <Sections checkBox={hasCheckBox} select="" source={Ranked} title='Ranqueada' />
                    <Sections checkBox={hasCheckBox} select="" source={Fun} title='Diversão'/>
                    <Sections checkBox={hasCheckBox} select="" source={Duelo} title='Duelo 1x1'/>
                    <Sections checkBox={hasCheckBox} select="" source={Pratice} title='Treino'/>

                </View>
            </ScrollView>
        </View>
    )
}