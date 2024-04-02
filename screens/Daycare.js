import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Daycare(props) {

    const [daycareData, setDaycare] = useState([]);
    const loadDaycare = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/pxxnn/WaggingweggiesApp/main/data.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            setDaycare(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadDaycare();
    }, []);

    return (
        <View style={props.style}>
            <View >
                <AntDesign name="left" size={20} color="black" />
                <Text style={{fontSize: 25 }}>Daycare</Text>
            </View>

            <Text style={{ marginTop:15, fontSize: 25, textAlign:'center' }}>Daycare</Text>
            <Text style={{ fontSize: 15, color: 'gray', marginVertical: 10 }}>Let's find the best choice</Text>
            <FlatList 
                data={daycareData}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={{ uri: item.image }} />
                        <View style={styles.imageOverlay}>
                            <Text style={styles.title}>{item.title}</Text>
                            {/* <Text style={styles.description}>{item.description}</Text> */}
                        </View>
                    </View>
                )}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingLeft: 8,
        marginHorizontal: 12,
        marginVertical:15,

    },
    image: {
        width: 190,
        height: 170,
        borderRadius: 10,
        
    },

    title: {
        fontSize: 20,
        color: 'black',
        // textAlign: 'center',
    },
    description: 
    {
        fontSize: 10,
        color: 'black',
    },
});
