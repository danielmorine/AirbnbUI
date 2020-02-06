import React from 'react';
import { View, Text } from 'react-native';

function Tag({title}){
    return(
        <View style={{minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#ddd', borderWidth: 0.2, borderRadius: 2, marginRight: 5}}>
            <Text style={{fontWeight: '700', fontSize: 10}}>{title}</Text>
        </View>
    )
}

export default Tag;