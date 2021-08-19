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