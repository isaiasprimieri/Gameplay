import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { Categories } from "../../components/Categories";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { Forms } from "../../components/Forms";
import { SectionsSelect } from "../../components/SectionsSelect";
import { ButtonLogin } from "../../components/ButtonLogin";


export function Appointment(){

    const [counter, setCounter] = useState(0)
    return(
        <Background>
            <KeyboardAvoidingView
            style={[styles.container]}
            behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            >
                <ScrollView>
                 <Header title="Agendar Partida"/>
                 <Categories hasCheckBox={true}/>
                 <Forms/>
                 <ButtonLogin icon={false} title="Agendar"/>
                 </ScrollView>
            </KeyboardAvoidingView>
        </Background>
    )
}