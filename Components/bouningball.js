import { View, StyleSheet, Animated, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default BouncingBall = () => {
    const animatedValue = new Animated.Value(0);

    const fun = () => {
        Animated.timing(animatedValue, {
            toValue: -160,
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
        outputRange: ['lightblue', 'yellow'],
    });

    return (
        <SafeAreaView>
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Animated.View style={[styles.container, { transform: [{ translateY: animatedValue }], backgroundColor: fun1 }]}></Animated.View>
                <Button title="Press me" onPress={fun}></Button>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
});

