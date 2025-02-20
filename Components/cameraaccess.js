import { useCameraPermissions, CameraView } from "expo-camera";
import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const cameraaccess = () => {
    const [CameraPermission, setCameraPermission] = useState(null)
    const [allow,setallow] = useState(false)
    const useCameraPermissions = async () => {
        const { status } = await CameraView.getCameraPermissionsAsync();
        if (status === 'granted') {
            setCameraPermission(status)
            setallow(true)
        }
        else {
            alert("Give Permission");
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Camera Access</Text>
                <Button mode="contained" onPress={useCameraPermissions}>Open Camera</Button>
                <CameraView style={{ width: '90%', height: 200, marginTop: 10, margin: 'auto' }} />
            </View>
        </SafeAreaView>
    );
}

export default cameraaccess;