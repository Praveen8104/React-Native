import {View,Text,Image} from 'react-native'
import React from 'react';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const imagepicker = () => {
    const [MyImage , setMyImage] = useState(null)
    const OpenGallery = async() => {
        const {status} = await ImagePicker.getMediaLibraryPermissionsAsync();
        if(status === 'granted')
        {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.All,
                allowsEditing:true
            });
            console.log(ImagePicker)
            setMyImage(result.assets[0].uri)
        }
        else{
            alert("Give Permission");
        }
    }

    return(
        <SafeAreaView  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View>
                <Button mode="contained" onPress={OpenGallery}>Open Gallery</Button>
                {
                    MyImage ? <Image style={{width:200,height:200}} source={{uri : MyImage}} /> : <><Text>Image is Not Selected</Text></>
                }
                
            </View>
        </SafeAreaView>
    )
}
export default imagepicker;




