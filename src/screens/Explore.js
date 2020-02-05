import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View, TextInput, SafeAreaView, Platform, StatusBar, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Category from '../components/explore/Category';

const { height, width} = Dimensions.get('window');
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
                           <ScrollView horizontal={true}
                           showHorizontalScroolIndicator={false} >
                             <Category
                                imageURL={require('../../assets/home.jpg')}
                                title="Home"/>
                            <Category
                                imageURL={require('../../assets/restaurant.jpg')}
                                title="Restaurant"/>
                             <Category
                                imageURL={require('../../assets/experiences.jpg')}
                                title="Experiences"/>                                
                           </ScrollView>
                        </View>
                        <View style={{marginTop: 40, paddingHorizontal: 20}}>
                           <Text style={{ fontSize: 24, fontWeight: '700'}}> Introducing Airbnb Plus</Text>
                           <Text style={{fontWeight: '100', marginTop: 10}}>A new selection of homes verified for quality & comfort</Text>
                        </View>
                        <View style={{width: width -40, height: 200, marginTop: 20}}>
                            <Image
                                source={require('../../assets/home.jpg')}
                                style={{
                                    flex: 1, 
                                    height: null,
                                    width: null,
                                    resizeMode: 'cover',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#DDDD'
                                }}
                            />
                        </View>                        
                    </ScrollView>
                </View>
               
            </SafeAreaView>
        )
}

export default Explore;

