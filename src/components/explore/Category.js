import React from 'react';
import { View, Text, Image} from 'react-native';

const Category= ({ imageURL, title }) => {
    return (
        <View style={{
            height: 130, 
            width: 130, 
            marginLeft: 20, 
            borderWidth: 0.5, 
            borderColor: '#DDD' }}> 
                 <View style={{flex: 2}}>
                     <Image source={imageURL}
                         style={{
                             flex:1, 
                             width: null, 
                             height: null, 
                             resizeMode: 'cover'}}
                     />
                 </View>
                 <View style={{
                     flex: 1,
                     paddingLeft: 10,
                     paddingTop: 10}}>
                        <Text>{title}</Text>
                 </View>
        </View>
    )
}

export default Category;