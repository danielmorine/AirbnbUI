import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View, TextInput, SafeAreaView, Platform, StatusBar, ScrollView, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Category from '../components/explore/Category';
import Home from '../components/explore/Home';
import Tag from '../components/explore/Tag';

const { width} = Dimensions.get('window');

 function Explore(){
     const [startHeaderHeight, setStartHeaderHeight] = useState(0);
     const [animatedHeaderHeight, setAnimatedheaderHeight] = useState(null);
     const [scrollY, setScrollY] = useState();
     const [endHeaderHeight, setEndHeaderHeight] = useState(0);

    this.scrollY = new Animated.Value(0);
     //setScrollY(new Animated.value(0));

      useEffect(() => {
       // setStartHeaderHeight(80);
       // setEndHeaderHeight(50);
            if(Platform.OS === 'android') {
                const value = 100 + StatusBar.currentHeight;
                this.startHeaderHeight(value);
                const endHeader = 70 + StatusBar.currentHeight;
                this.endHeaderHeight(endHeader);
        }

        this.animatedheaderHeight(this.scrollY.interpolate({
            inputRange: [0,50],
            outputRange:[startHeaderHeight, endHeaderHeight],
            extrapolate: 'clamp'
        }))
    },[]);

        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{flex: 1}}>
                    <Animated.View style={{
                        height: this.animatedHeaderHeight, 
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
                            <Ionicons name="ios-search" size={20} style={{ marginRight: 10 }}/>
                            <TextInput 
                                underlineColorAndroid='transparent'
                                placeholder="Find here"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: '#FFF'}}
                            />
                       </View>
                       <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: 10}} >
                          <Tag title="Guests" />
                          <Tag title="Dates" />                          
                       </Animated.View>
                    </Animated.View>
                    <ScrollView
                     scrollEventThrottle={16}
                     onScroll={Animated.event([
                            { nativeEvent: {
                                contentOffset: {
                                        y: this.scrollY
                                    }
                                }
                            }                
                        ])}
                     >

                         <View style={{flex: 1, backgroundColor: '#FFF'}}>
                             <Text style={{ fontSize: 24, fontWeight: '700',
                            paddingHorizontal: 20}}> 
                                 What can we help you find, Daniel?
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
                        
                            <View style={{ width: width -40, height: 200, marginTop: 20}}>
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
                        </View>
                        <View style={{ marginTop: 40}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Homes around the world
                            </Text>
                            <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                           <Home
                            width={width}
                            imageURL={require('../../assets/home.jpg')}
                            title="PRIVATE ROOM - 2 BEDS"
                            description="The Cozy Palace"
                            price="82$"
                            disable={true}
                            maxStars={5}
                            rating={4}
                            starSize={10}

                           />
                           <Home
                            width={width}
                            imageURL={require('../../assets/home.jpg')}
                            title="PRIVATE ROOM - 2 BEDS"
                            description="The Cozy Palace"
                            price="82$"
                            disable={true}
                            maxStars={5}
                            rating={4}
                            starSize={10}
                           />
                           <Home
                            width={width}
                            imageURL={require('../../assets/home.jpg')}
                            title="PRIVATE ROOM - 2 BEDS"
                            description="The Cozy Palace"
                            price="82$"
                            disable={true}
                            maxStars={5}
                            rating={4}
                            starSize={10}
                           />
                           </View>
                        </View>                      
                    </ScrollView>
                </View>               
            </SafeAreaView>
        )
}

export default Explore;

