import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import React from 'react';
import Header from '../Shared/header'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation})=>{
            return {
            headerTitle: () => <Header navigation={navigation} title="About GameZone"/>,
            // headerStyle:{backgroundColor:'#eee'}
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            height:60,
            backgroundColor:'#eee'
        }
    }
})
export default AboutStack