import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({navigation}){

const openMenu = () => {
    navigation.openDrawer()
}

 return (
     <View style={globalStyles.header}>
         <MaterialIcons name='menu' size={30} onPress={openMenu} style={globalStyles.icon}/>
        <View style={styles.headerTitle}>
            <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
            <Text style={globalStyles.headerText}>GameZone</Text>
        </View>
     </View>
 )
}

const styles = StyleSheet.create({
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    headerTitle:{
        flexDirection:'row'
    }
})