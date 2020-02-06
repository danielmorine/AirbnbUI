import React from 'react';
import { View, Text, Image } from 'react-native';
import StartRating from 'react-native-star-rating';


function Home({ imageURL, title, description, price, width, disable, maxStars, rating, starSize}){
    return(
        <View style={{ width: width / 2 - 30, height: width / 2 - 30, borderWidth: 0.5, borderColor: '#DDD'  }}>
            <View style={{flex: 1}}>
                <Image style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
                    source={imageURL}
                />
            </View>
            <View style={{ 
                flex: 1, 
                alignItems: 'flex-start', 
                justifyContent: 'space-evenly',
                paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>{title}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{description}</Text>
                    <Text style={{ fontSize: 10 }}>{price}</Text>
                    <StartRating
                        disable={disable}
                        maxStars={maxStars}
                        rating={rating}
                        starSize={starSize}
                    />
            </View>
        </View>
    )
}

export default Home;