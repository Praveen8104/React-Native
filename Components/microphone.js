import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import * as Permissions from "expo-permissions";

const Microphone = () => {
    const getPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        if (status === "granted") {
            alert("Permission Granted");
        } else {
            alert("Permission Denied");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Microphone</Text>
            <Button
                mode="contained"
                style={styles.button}
                onPress={getPermission}
            >
                <Text style={styles.text}>Get Permission</Text>
            </Button>
        </View>
    );
};

export default Microphone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 20,
    },
});
