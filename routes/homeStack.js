import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'
import Header from '../Shared/header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=>{
            return {
            headerTitle: () => <Header navigation={navigation}/>,
            // headerStyle:{backgroundColor:'#eee'}
            }
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details',
            // headerStyle:{backgroundColor:'#eee'}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            height:60,
            backgroundColor:'#eee'
        }
    }
});

export default HomeStack;