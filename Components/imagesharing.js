import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import * as Picker from "expo-image-picker";
import { Button } from "react-native-paper";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
export default function imageSharing() {
    const { width, height } = Dimensions.get("screen");
    const [image, setImage] = useState(null);

    const OpenGallery = async () => {
        const permissionResult = await Picker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.status === "granted") {
            const result = await Picker.launchImageLibraryAsync();
            setImage(result.assets[0].uri);
        }
    };

    const ShareFile = async () => {
        const ImageURL =
            "https://adityauniversity.in/static/media/AU-logo.d4c9addb1494f8538d6a.jpg";
        const FileURL = `${FileSystem.cacheDirectory}/Shared_image.png`;
        const { uri } = await FileSystem.downloadAsync(ImageURL, FileURL);

        const permission = await Sharing.isAvailableAsync();
        if (permission) {
            Sharing.shareAsync(uri);
        } else {
            alert("Give Permission to Share");
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
                <View style={{ width: width, alignItems: "center" }}>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                </View>
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