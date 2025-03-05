import React, { useState } from "react";
import { Audio } from "expo-av";

const Microphone = () => {
    const [MyAudio, setAudio] = useState(null);
    const [AudioPath, setPath] = useState(null);

    const startRecording = async () => {
        const { status } = await Audio.requestPermissionsAsync();
        if (status === "granted") {
            const { recording } = await Audio.Recording.createAsync();
            setAudio(recording);
        }
    }

    const stopRecording = async () => {
        if (MyAudio) {
            await MyAudio.stopAndUnloadAsync();
            setPath(MyAudio._uri);
        }
        else {
            alert("No audio to save!");
            return;
        }
    }

    const playAudio = async () => {
        const { sound } = await Audio.Sound.createAsync({ uri: AudioPath });
        await sound.playAsync();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Button icon="microphone" mode="contained" onPress={startRecording}>Start Recording</Button>
            <Button icon="stop" mode="contained" onPress={stopRecording}>Stop Recording</Button>
            <Button icon="play" mode="contained" onPress={playAudio}>Play Audio</Button>
        </SafeAreaView>
    )
}