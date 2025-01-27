import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const Screen1 = () => {
    const navigation = useNavigation();
    const fun = () => {
        navigation.navigate('Screen 2');
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
                mode="contained"
                onPress={fun}
                style={{ marginTop: 10,
                    width: 150,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                 }}
            >Go to Screen 2</Button>
        </View>
    );
}
export default Screen1;

