import React, {useState} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({navigation}){
    const [reviews, setReviews] = useState([
        {title:'Unreal Tournament', rating:5, body:"Body of Unreal Tournament", key:"1"},
        {title:'DOOM FPS', rating:4, body:"Body of Unreal TournamentDOOM FPS", key:"2"},
        {title:'NFS Racing', rating:3, body:"Body of  NFS Racing", key:"3"},
    ])

   
    return (
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            renderItem = {({item})=>(
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}
