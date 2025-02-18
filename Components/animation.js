import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Animated } from "react-native";

export default Animation = () => {
    const animatedValue = new Animated.Value(0);

    const fun = () => {
        Animated.timing(animatedValue, {
            toValue: 260,
            duration: 1500,
            useNativeDriver: false,
        }).start((
            () => {
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: false,
                }).start();
            }
        ));
    }

    const fun1 = animatedValue.interpolate({
        inputRange: [0, 260],
        outputRange: ['red', 'black'],
    });

    return (


        <SafeAreaView>
            <Animated.View style={[styles.container, { transform: [{ translateX: animatedValue }], backgroundColor: fun1 }]}></Animated.View>
            <Button title="Press me" onPress={fun}></Button>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 100,
    },
});