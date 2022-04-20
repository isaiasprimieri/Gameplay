import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import Agenda from '../../assets/agenda.png'

// import CheckList from '../../assets/checkList.svg'
import CheckList from '../../assets/checkList.svg'
import { theme } from "../../global/theme";


type Props = {
    keyId : {
        title: string,
        source: any,
        typeCategory: string,
        name: string,
        date: string,
        hour: string,
        owen?: boolean,

    }
}
export function Item({keyId} : Props){
    const navigation = useNavigation()

    function handleDetails(){
        navigation.navigate('ConstraintDetails')
    }

    return(
        <TouchableOpacity activeOpacity={0.7} onPress={handleDetails} style={styles.container}>
            <View style={styles.iconsBox}>
                <Image style={styles.icons}  source={keyId.source}/>
            </View>

            <View style={styles.indentifer}>
                <View style={styles.identiferHead}>
                    <Text style={styles.title}>
                        {keyId.title}
                    </Text>
                    <View style={styles.typeBox}>
                        <Text style={styles.typeCategory} >
                            {keyId.typeCategory}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.name}>
                        {keyId.name}
                    </Text>
                    <View style={styles.matchBox}>
                        <View style={keyId.owen ? styles.agendaBoxOf : styles.agendaBox }>
                            {/* <CheckList fill={keyId.owen ? 'red' : 'green'} width={18} height={18} /> */}
                            <Image source={Agenda} style={styles.agenda}/>
                        </View>
                        <Text style={styles.match}>
                            {keyId.date} às {keyId.hour}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}