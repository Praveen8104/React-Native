import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Picker from "expo-image-picker";
import { Button } from "react-native-paper";
import * as Sharing from "expo-sharing";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");

export default function ImageSharing() {
    const [image, setImage] = useState(null);

    const OpenGallery = async () => {
        const permissionResult = await Picker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.status === "granted") {
            const result = await Picker.launchImageLibraryAsync();
            if (!result.canceled) {
                setImage(result.assets[0].uri); // Update the image state with the selected URI
            }
        }
    };

    const ShareFile = async () => {
        if (image) {
            const permission = await Sharing.isAvailableAsync();
            if (permission) {
                Sharing.shareAsync(image);
            } else {
                alert("Sharing is not available on this device.");
            }
        } else {
            alert("No image selected to share.");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: width,
                        marginTop: 20,
                    }}
                >
                    <Button mode="contained" onPress={OpenGallery}>
                        Open Gallery
                    </Button>
                </View>
                {image && (
                    <View style={{ width: width, alignItems: "center" }}>
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    </View>
                )}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: width,
                        marginTop: 20,
                    }}
                >
                    <Button mode="contained" onPress={ShareFile}>
                        Share Image
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
