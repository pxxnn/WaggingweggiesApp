import React from 'react';
import { Image, View } from 'react-native';

export default function Banner() {
    return (
        <View>
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 6/2 }} source={require("../../assets/home/Banner.png")} />
            </View>
        </View>    
    );
}