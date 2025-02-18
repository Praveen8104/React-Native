import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Screen4 from './screen4';
import ChatScreen from './chatscreen';

const Stack = createStackNavigator();
const TopBar = createMaterialTopTabNavigator();

const TopBarNavigator = () => (
    <TopBar.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: "#fff",
            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: 'bold',
                width: 100,
            },
            tabBarIndicatorStyle: {
                backgroundColor: "#fff",
                height: 4,
                borderRadius: 10,
            },
            tabBarStyle: {
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#517DA2'
            },
            tabBarShowIcon: true,
        }}
    >
        <TopBar.Screen name="All Chats" component={Screen1} />
        <TopBar.Screen name="Movies" component={Screen2} />
        <TopBar.Screen name="Cricket" component={Screen4} />
        <TopBar.Screen name="Bots" component={Screen3} />
    </TopBar.Navigator>
);

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='MainTabs'>
            <Stack.Screen
                name="MainTabs"
                component={TopBarNavigator}
                options={{
                    header: () => (
                        <SafeAreaView>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: 10,
                                    backgroundColor: '#517DA2',
                                }}
                            >
                                <TouchableOpacity>
                                    <Ionicons name="menu" size={24} color="white" />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 26, fontWeight: '500', color: "#fff" }}>Telegram</Text>
                                
                                <TouchableOpacity>
                                    <Ionicons name="ellipsis-vertical" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    ),
                }}
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={({ route }) => ({
                    headerShown: true,
                    headerTitle: route.params?.name || "Chat",
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#517DA2",
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "500",
                    },
                })}
            />
        </Stack.Navigator>
        <StatusBar barStyle="light-content" backgroundColor="#517DA2" />
    </NavigationContainer>
);

export default Navigation;
