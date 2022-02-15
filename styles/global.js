import { StyleSheet } from 'react-native'


export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'white'
    },
    titleText:{
        fontSize:20,
        color:'#333',
        fontWeight:'bold'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    header:{
        width:'100%',
        height:'100%',
        flexDirction:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    icon:{
        position:'absolute',
        left:15
    }
})

export const images = {
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png')
    }
}