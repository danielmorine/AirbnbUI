import React, { useEffect, useState } from 'react';
import { Image, View, TextInput, SafeAreaView, Platform, StatusBar, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Category from '../components/explore/Category';


 function Explore(){
     const [startHeaderHeight, setStartHeaderHeight] = useState(0);

      useEffect(() => {
        setStartHeaderHeight(80);
            if(Platform.OS === 'android') {
                const value = 100 + StatusBar.currentHeight;
                setStartHeaderHeight(value);
        }
    },[]);

        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{flex: 1}}>
                    <View style={{
                        height: startHeaderHeight, 
                        backgroundColor: 'white', 
                        borderBottomWidth: 1,
                        borderBottomColor: '#DDDDDD'}}>
                       <View style={{ 
                           flexDirection: 'row', 
                           padding: 10, 
                           backgroundColor: '#FFF', 
                           marginHorizontal: 20,
                           shadowOffset: {width: 0, height: 0},
                           shadowColor: '#000',
                           shadowOpacity: 0.2,
                           elevation: 1,
                           marginTop: Platform.OS === 'android' ? 30 : null
                           }}>
                            <Ionicons name="ios-search" size={20}/>
                            <TextInput 
                                underlineColorAndroid='transparent'
                                placeholder="Find here"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: '#FFF'}}
                            />
                       </View>
                    </View>
                    <ScrollView
                     scrollEventThrottle={16}>

                         <View style={{flex: 1, backgroundColor: '#FFF'}}>
                             <Text style={{ fontSize: 24, fontWeight: '700',
                            paddingHorizontal: 20}}> 
                                 What can we help you find, Dani?
                             </Text>
                         </View>
                        <View style={{height: 130, marginTop: 20}}>
                           <ScrollView>
                             <Category
                                imageURL={require('../../assets/home.jpg')}
                                title="Home"
                             />
                           </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
}

export default Explore;

