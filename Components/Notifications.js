// import { SafeAreaView } from "react-native-safe-area-context";
// import React from "react";
// import { useState, useEffect } from "react";
// import { Button } from "react-native-paper";
// import { View, Text } from "react-native";
// import * as Notifications from 'expo-notifications'

// const Notification = () => {
//     const [Token, setToken] = useState(null)
//     const GenerateToken = async () => {
//         const { status } = await Notifications.getPermissionsAsync()
//         console.log(status, "status")
//         if (status === 'denied') {
//             const result = await Notifications.requestPermissionsAsync();
//             console.log(result)
//         }
//         const { data } = await Notifications.getExpoPushTokenAsync();
//         console.log(data)
//         setToken(data)
//     }

//     useEffect(() => {
//         const Listener = Notifications.addNotificationReceivedListener((item) => {
//             console.log('received', item.request.content.data)
//         })

//         const Responder = Notifications.addNotificationResponseReceivedListener((item) => {
//             console.log('responded', item)
//         })

//         return () => {
//             Listener.remove();
//             Responder.remove();
//         }

//     }, []);

//     Notifications.setNotificationHandler({
//         handleNotification: async () => ({
//             shouldShowAlert: true,
//             shouldPlaySound: true
//         })
//     })

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Button mode="contained" icon="bell" onPress={GenerateToken}>Token</Button>
//             </View>
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {
//                     Token ? <Text style={{ fontSize: 30 }}>{Token}</Text> : <Text style={{ fontSize: 30 }}>NO Token</Text>
//                 }
//             </View>

//         </SafeAreaView>
//     )
// }

// export default Notification;