import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

export default function ServiceFlatList(props) {

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/pxxnn/WaggingweggiesApp/main/data.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
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
            <Text style={{ fontSize: 15, color: 'gray', marginVertical: 10 }}>Let's find out what's most interesting!</Text>
            <FlatList 
                horizontal={true}
                data={onlineTours}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={{ uri: item.uri }} />
                        <View style={styles.imageOverlay}>
                            <Text style={styles.title}>{item.title}</Text>
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
    imageOverlay: {
        marginTop: -50,
        height: 50,
        width: 200,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        opacity: 0.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});
