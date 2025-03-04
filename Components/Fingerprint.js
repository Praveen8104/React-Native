import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Fingerprint = () => {
    const unlock = async () => {
        const status = await LocalAuthentication.hasHardwareAsync();
        console.log(status);
        if (status) {
            const result = await LocalAuthentication.isEnrolledAsync();
            console.log(result)
            if (result) {
                const auth = await LocalAuthentication.authenticateAsync({
                    promptMessage: "Authenticate to Unlock",
                });
                alert("Authenticated");
                console.log("Authenticated", auth);
            } else {
                alert("Authentication Failed");
                console.log("Authentication Failed");
            }
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>Fingerprint Scanner</Text>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={unlock}
                    icon={({ size, color }) => (
                        <Icon name="fingerprint" size={25} color={color} />
                    )}
                >
                    <Text style={styles.text}>Unlock</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Fingerprint;

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
        fontSize: 16,
        fontWeight: "bold",
    },
});