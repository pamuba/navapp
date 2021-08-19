import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({navigation}){

const openMenu = () => {
    navigation.openDrawer()
}

 return (
     <View style={globalStyles.header}>
         <MaterialIcons name='menu' size={30} onPress={openMenu} style={globalStyles.icon}/>
        <View>
            <Text style={globalStyles.headerText}>GameZone</Text>
        </View>
     </View>
 )
}