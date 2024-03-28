import React from "react";
import { Text } from "react-native";
import { Image, View } from "react-native";

export default function ServiceItem(props) {
    return (
        <View style={{marginRigh : 10}}>
            <Image style={{ width : 200 , height : 200, borderRadius : 5, borderWidth : 20 }} source={{uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
            <View style={{marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10
}}>
                <Text style={{fontSize : 20, color: 'white'}}>Our Service</Text>
            </View>
            
        </View>
    );
}