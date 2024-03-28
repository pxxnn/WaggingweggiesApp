import React from "react";
import { View, Text,Image } from "react-native";
import { FontAwesome, Fontisto } from "@expo/vector-icons";


export default function Pocket() {
    return (
        <View style={{ flex: 1, marginTop: -15, margin: 10, padding: 10, borderRadius: 10, backgroundColor: "#F5F5F5", shadowColor: "black", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5 }}>
            
            {/* View ก้อนที่ 1 */}
            <View style={{ marginTop: 1 }}>
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="money" size={24} color="#F7CF64" />
                    <Text style={{ fontSize: 15, marginLeft: 10 }}>THB 0.00</Text>
                    <View style={{marginLeft:130,borderLeftWidth:1}}>

                    </View>
                    <View style={{ flexDirection: "row",marginLeft: 10}}>
                        <Fontisto name="shopping-sale" size={24} color="#F7CF64" />
                        <Text style={{ fontSize: 15, marginLeft: 10 }}>5 CODE</Text>
                    </View>

                </View>
                {/* View ก้อนที่ 2 */}
                <View>
                    {/* <Text style={{ fontSize: 12, color: '#444444' }}>Get 5% cashback for EVERY 10th booking</Text> */}
                </View>
            </View>
        </View>
    );
}
