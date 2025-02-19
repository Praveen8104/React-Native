import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import React from 'react';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system'

const imageSharing = () => {

    const [MyImage, setMyImage] = useState(null)
    // const OpenGallery = async () => {

    //     const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    //     if (status === "granted") {
    //         const result = await ImagePicker.launchImageLibraryAsync({
    //             allowsEditing: true,
    //             mediaTypes: ImagePicker.MediaTypeOptions.All,
    //             quality: 1
    //         });

    //         console.log(result)
    //         setMyImage(result.assets[0].uri)
    //     }
    //     else {
    //         alert("Give permission to open Media Items")
    //     }
    // }
    const ShareFile = async () => {
        const ImageURL = "https://adityauniversity.in/static/media/AU-logo.d4c9addb1494f8538d6a.jpg"
        const FileURL = `${FileSystem.cacheDirectory}` / Shared_image.png;
        const { uri } = await FileSystem.downloadAsync(ImageURL, FileURL)

        const permission = await Sharing.isAvailableAsync();
        if (permission) {
            Sharing.shareAsync(uri);
        }
        else {
            alert("Give Permission to Share")
        }


    }
    return (
        <SafeAreaView>

            <Button mode="contained" onPress={ShareFile}>Share</Button>

        </SafeAreaView>
    )
}

export default imageSharing;