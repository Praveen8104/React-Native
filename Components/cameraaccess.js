import { useCameraPermissions, CameraView } from "expo-camera";
import { View, Text, Image } from "react-native";
import React, { useRef } from "react";
import { useState } from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

const cameraaccess = () => {
    const [permission, grantpermission] = useCameraPermissions();
    const [allow, setallow] = useState(false)
    const [face, setface] = useState("back");
    const [MyImage, setMyImage] = useState(null)
    const cameraRef = useRef(null);
    const opencamera = async () => {
        setallow(true)
    }
    const closecamera = async () => {
        setallow(false)
    }
    const rotatecamera = async () => {
        if (face === "back") {
            setface("front")
        }
        else {
            setface("back")
        }
    }
    const takephoto = async () => {
        if (cameraRef.current != null) {
            const photo = await cameraRef.current.takePictureAsync({
                quality: 1,
            });
            console.log(photo);
            setMyImage(photo.uri)
            setallow(false)
        }
    }
    const sharephoto = async () => {
        if (!MyImage) {
            alert("No image to share!");
            return;
        }

        try {
            const FileURL = `${ FileSystem.cacheDirectory }Shared_image.jpg`;
            await FileSystem.copyAsync({
                from: MyImage,
                to: FileURL,
            });
            const permission = await Sharing.isAvailableAsync();
            if (permission) {
                await Sharing.shareAsync(FileURL);
            } else {
                alert("Sharing is not available on this device.");
            }
        } catch (error) {
            console.error("Error sharing file:", error);
            alert("Failed to share the image.");
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {allow ? <CameraView style={{ width: 300, height: 300 }} facing={face} enableTorch={false} ref={cameraRef}>
                </CameraView> : <Text>Camera is not opened</Text>}
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: 300, marginTop: 20 }}>
                    <Button mode="contained" icon="camera" style={styles.btn} onPress={opencamera}>Open Camera</Button>
                    {allow ? <Button mode="contained" icon="camera" style={styles.btn} onPress={closecamera}>Close Camera</Button> : <></>}
                </View>
                {allow ? <Button mode="contained" icon="" style={styles.btn} onPress={rotatecamera}>
                    <Icon
                        name="camera-rotate"
                        size={15}
                        color="white"
                    />Rotate</Button> : <></>}
                {
                    MyImage ? <Image style={{ width: 250, height: 250 }} source={{ uri: MyImage }} /> : <><Text>Image is Not Selected</Text></>
                }
                {allow ? <Button mode="contained" icon="camera" style={styles.btn} onPress={takephoto}>Take Photo</Button> : <></>}
                {MyImage ? <Button mode="contained" icon="share" style={styles.btn} onPress={sharephoto}>Share Photo</Button> : <></>}
            </View>
        </SafeAreaView>
    );
}

export default cameraaccess;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    btn: {
        width: 150,
        margin: 10
    }
});
