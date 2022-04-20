import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { List } from "../List";
import { styles } from "./style";
import * as id from '../identifiers/index'
import { ListHeader } from "../ListHeader";


export function Constraint(){
    return(
        <>

        <ListHeader title="Partidas Agendadas" subTitle="Total 6"/>
            <List/>
        </>
    )
}