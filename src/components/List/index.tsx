import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { theme } from "../../global/theme";
import { Item } from "../Item";
import { styles } from "./style";
import Ranked from '../../assets/ranked.png'
import LeagueOfLegendsIcon from '../../assets/LeagueOfLegendsIcon.png'
import { itens } from "../identifiers";


export function List(){

    const listagem = itens.map(
        (it, id) => <Item key={id} keyId={itens[id]} />
    )
    return(
        <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator ={false}
        >
        <View style={styles.container}>
            <View style={styles.section}>
                {listagem}
            </View>
        </View>
        </ScrollView>
    )
}