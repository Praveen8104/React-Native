import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';

const getFormattedTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const generateId = () => Math.random().toString(36).substr(2, 9);

const ChatScreen = () => {
    const route = useRoute();
    const { name = 'Unknown', message = 'Hello!', timestamp = '12:00 PM' } = route.params || {};

    const [messages, setMessages] = useState([
        {
            id: generateId(),
            text: message,
            timestamp: timestamp,
            isUser: false,
        },
    ]);

    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            const newMessage = {
                id: generateId(),
                text: input,
                timestamp: getFormattedTime(),
                isUser: true,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInput('');
        }
    };

    return (
        <ImageBackground
            source={require('../assets/chatbg.jpg')}
            style={styles.background}
        >
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageContainer,
                            item.isUser ? styles.yourMessage : styles.theirMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>
                            {item.text}{'     '}
                            <Text style={styles.timestamp}>
                                {item.timestamp}
                            </Text>
                        </Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.attachButton}>
                    <MaterialCommunityIcons name="sticker-emoji" size={25} color="black" />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Message"
                />
                <TouchableOpacity style={styles.attachButton}>
                    <MaterialIcons name="attach-file" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.attachButton}>
                    <MaterialCommunityIcons name="camera" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <MaterialIcons name="send" size={25} color="#2FA3D1" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        padding: 10,
    },
    messageContainer: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        marginVertical: 5,
        maxWidth: '75%',
        flexWrap: 'wrap',
        backgroundColor: '#dcf8c6',
    },
    yourMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#dcf8c6',
    },
    theirMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    timestamp: {
        fontSize: 12,
        color: '#666',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 60,
    },
    input: {
        flex: 1,
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        fontSize: 16,
    },
    attachButton: {
        padding: 5,
        marginRight: 10,
    },
    sendButton: {
        padding: 5,
        borderRadius: 100,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ChatScreen;
