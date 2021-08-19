import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'

export default function About({navigation}){
    const pressHandler = () => {
        // navigation.navigate('ReviewDetails')
        // navigation.pop()
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
            <Button title="Go Back To Review Details" onPress={pressHandler}/>
        </View>
    )
}
