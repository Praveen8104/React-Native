import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const chatlist = [
    { id: 2, name: 'MovieRulz', message: 'Pushpa Reloaded Version', Image: "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg" },
    { id: 3, name: 'iPopkorn', message: 'GameChanger Trailer', Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CcHXSLHaifpxVsG2kPMg9qckJlFax9SIHw&s" },
    { id: 4, name: 'CinemicaBot', message: "Hey Guys", Image: "https://pbs.twimg.com/profile_images/1559489510819479554/UCmSSTlG_400x400.jpg" },
    { id: 5, name: 'PSPK BOT', message: 'Channel Banned', Image: "https://w0.peakpx.com/wallpaper/652/611/HD-wallpaper-pspk-smile-janasena-janasenani-pavan-pavan-kalyan-pawan-pawan-kalyan-pspk-smile-white.jpg" },
];

const { width } = Dimensions.get('screen');

const Screen2 = () => {
    const navigation = useNavigation();
    const date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear() - 2000);

    const fun = (name, message) => {
        navigation.navigate('ChatScreen', { name, message });
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                {chatlist.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => fun(item.name, item.message)} activeOpacity={1}>
                        <View style={{ flexDirection: 'row', padding: 10, borderBottomColor: 'grey', width: width }}>
                            <Image source={{ uri: item.Image }} style={{ width: 55, height: 55, borderRadius: 50 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                                <Text style={{ fontSize: 15, color: 'grey' }}>{item.message}</Text>
                            </View>
                            <View style={{ position: 'absolute', right: 10, top: 20 }}>
                                <Text style={{ fontSize: 15, color: 'grey' }}>{date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Screen2;
