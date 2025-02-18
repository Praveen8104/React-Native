import React from "react";
import { Text, StyleSheet, View, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Carousel = () => {
    const { width, height } = Dimensions.get('screen')
    const Info = ['Virat Kohli', 'Hitman', 'Bumrah', 'Siraj', 'Rahul', 'Pant', 'Dhoni', 'Jadeja', 'Shami']
    return (
        <SafeAreaView>
            <FlatList
                data={Info}
                renderItem={({ item }) => (
                    <View style={{ height: height, width: width, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={
                            {
                                width: "90%",
                                height: "25%",
                                justifyContent: 'center',
                                alignItems: "center",
                                backgroundColor: 'grey',
                                borderRadius: 15,
                            }}>
                            <Text style={{ color: "white", fontSize: 55 }}>{item}</Text>
                        </View>
                    </View>
                )}
                horizontal
                pagingEnabled
            />
        </SafeAreaView>
    )
}
export default Carousel;