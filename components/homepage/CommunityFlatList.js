import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";


export default function CommunityFlstList(props) {

    const [communityData, setCommunity] = useState([]);
    const loadCommunity = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/pxxnn/WaggingweggiesApp/main/data.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            setCommunity(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadCommunity();
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 25 }}>Pet in Community</Text>
            <FlatList 
                horizontal={true}
                data={communityData}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={{ uri: item.image }} />
                        <View style={styles.imageOverlay}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        
    },

    title: {
        fontSize: 20,
        color: 'black',
        // textAlign: 'center',
    },
    description: 
    {
        fontSize: 15,
        color: 'black',
    },
});
