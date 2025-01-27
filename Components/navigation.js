import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

export default Navigation = () => {
    const Stack = createStackNavigator();
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Screen 1" component={Screen1} />
                    <Stack.Screen name="Screen 2" component={Screen2} />
                    <Stack.Screen name="Screen 3" component={Screen3} />
                </Stack.Navigator>
            </NavigationContainer>
    );
};