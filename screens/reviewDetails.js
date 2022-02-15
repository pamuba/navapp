import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../Shared/card'
import { images } from '../styles/global'


export default function ReviewDetails({navigation}){
    const rating = navigation.getParam('rating')
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text style={styles.rating}>
                    <Text>Game Zone Rating:</Text>
                    <Image source={images.ratings[rating]} />
                </Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderColor:'#eee'
    },
    container:{
        padding:24
    }
})