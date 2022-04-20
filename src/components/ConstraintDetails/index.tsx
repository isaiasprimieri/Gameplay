import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./style";
import { Header } from "../Header";
import BannerLeagueOfLegends from "../../assets/bannerLeagueOfLegends.jpeg"
import { ListHeader } from "../ListHeader";
import { Member } from "../Member";
import AvatarImg from "../../assets/avatar.png"
import { ButtonLogin } from "../ButtonLogin";
import CheckList from '../../assets/checkList.svg'


export function ConstraintDetails(){
    return(
        <>
            <Header title="Detalhes"/>
            <ImageBackground source={BannerLeagueOfLegends} style={styles.section}>
                <View style={styles.textBox}>
                    <Text style={styles.title}>
                        Lendarios
                    </Text>
                    <Text style={styles.subtitle}>
                        Hoje iremos passar pela md10 do chalenger sem nenhuma derrota
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader subTitle='Total 3' title='Jogadores'/>
            <Member status="online" avatar_url={AvatarImg}/>
            <Member status="online" avatar_url={AvatarImg}/>
            <Member status="offline" avatar_url={AvatarImg}/>

            <ButtonLogin title="Entrar"/>
        </>
    )
}