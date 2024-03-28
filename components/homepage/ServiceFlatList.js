import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";

export default function ServiceFlatList(props) {

    
    

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/pxxnn/WaggingweggiesApp/main/data.json?token=GHSAT0AAAAAACQHI4ZB2FEUVWQ3DXJNQL36ZQFE3SA');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);



    return (
        <View style={props.style}>
            <Text style={{ fontSize: 25 }}>Service</Text>
            <Text style={{ fontSize: 15, color: 'gray', marginVertical: 10 }}>Let find out what most interesting things</Text>
            <FlatList horizontal={true}
                // data={tours}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ marginTop: -50, height: 50, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>{item.title}</Text>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            >
                <View style={{ flexDirection: "row" }}>
                    {/* <TourItem />
                    <TourItem />
                    <TourItem /> */}
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }} />
                        <View style={{ marginTop: -50, height: 50, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in Somewhere</Text>
                        </View>
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }} />
                        <View style={{ marginTop: -50, height: 50, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in Somewhere</Text>
                        </View>
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 200, height: 200, borderRadius: 10 }} source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }} />
                        <View style={{ marginTop: -50, height: 50, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in Somewhere</Text>
                        </View>
                    </View>
                </View>
            </FlatList>

        </View>
    );
} 
