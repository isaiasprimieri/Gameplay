import React from "react";
import { View, Text, Image } from "react-native";
import illustrationImg from "../../assets/illustration.png"
import { Background } from "../../components/Background";
import { ButtonLogin } from "../../components/ButtonLogin";
import { styles } from "./style";

type Props = {
    navigation:any
}

export function SignIn({navigation} : Props){
    return(
        <Background>
            <View style={styles.container}>
                <Image source={illustrationImg} style={styles.image}/>
                <Text style={styles.title}>
                    Conecte-se{'\n'}
                    e organize suas{'\n'}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonLogin icon title="Entrar com Discord"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
        </Background>
    )
}