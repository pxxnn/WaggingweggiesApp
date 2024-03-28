import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      {/* View ก้อนที่ 2 */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress("Boarding")} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../../assets/home/Boarding.png")} />
            <Text style={styles.text}>Boarding</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress("Sitting")} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../../assets/home/Sitting.png")} />
            <Text style={styles.text}>Sitting</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress("Walking")} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../../assets/home/Walking.png")} />
            <Text style={styles.text}>Walking</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress("Taxi")} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../../assets/home/Taxi.png")} />
            <Text style={styles.text}>Taxi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress("Grooming")} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../../assets/home/Grooming.png")} />
            <Text style={styles.text}>Grooming</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress("Training")} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../../assets/home/Traning.png")} />
            <Text style={styles.text}>Training</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const handleImagePress = (title) => {
  console.log("Image pressed:", title);
  
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center', 
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 5,
  },
  imageWrapper: {
    alignItems: 'center', 
  },
  image: {
    height: 55,
    width: 55,
  },
  text: {
    marginTop: 5, 
  },
  touchable: {
    flex: 1, 
    marginHorizontal: 5, 
  },
});
