import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


 import Explore from './src/screens/Explore';
import Saved from './src/screens/Saved';
import Trips from './src/screens/Trips';
import Inbox from './src/screens/Inbox';
import Profile from './src/screens/Profile';


export default createAppContainer(
  createBottomTabNavigator({
    Explore: {
      screen: Explore,
      navigationOptions: () => ({
       tabBarLabel: 'EXPLORE',
        tabBarIcon:({tintColor}) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
     }),
    },
    Saved: {
      screen: Saved,
      navigationOptions: () => ({
        tabBarLabel: 'SAVED',
        tabBarIcon:({tintColor}) => (
          <Ionicons name="ios-heart" color={tintColor} size={24} />
        )
      }),
    },
    Trips: {
      screen: Trips,
      navigationOptions: () => ({
        tabBarLabel: 'TRIPS',
        tabBarIcon:({tintColor}) => (
          <Image source={require('./assets/airbnb.png')} style={{height: 24, width: 24, tintColor: tintColor}}/>
        )
      }),
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: () => ({
        tabBarLabel: 'INBOX',
        tabBarIcon:({tintColor}) => (
          <Ionicons name="ios-chatboxes" color={tintColor} size={24} />
        )
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarLabel: 'PROFILE',
        tabBarIcon:({tintColor}) => (
          <Ionicons name="ios-person" color={tintColor} size={24} />
        )
      }),
    },   
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: '#000',
        shadowOpacity: '0.5',
        elevation: 5
      }
    }
  })
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
