import React from 'react';
import { Button, Text, TextInput, View, Image, StyleSheet } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image source={require("../assets/home/Logo2.png")} />
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />

                <Button title="Login" color="#988AB6" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100, 
        resizeMode: 'contain', 
    },
    formContainer: {
        flex: 2,
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    input: {
        width: '100%',
        fontSize: 20,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    // loginButton: {
    //     marginTop: 20, 
    //     // width: '80%', 
    // },
});
