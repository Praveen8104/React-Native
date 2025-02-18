import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const chatlist = [
    { id: 2, name: 'MoviesBot', message: 'Search for movies', Image: "https://w0.peakpx.com/wallpaper/652/611/HD-wallpaper-pspk-smile-janasena-janasenani-pavan-pavan-kalyan-pawan-pawan-kalyan-pspk-smile-white.jpg" },
    { id: 3, name: 'iPopkornBot', message: 'Game of Thrones', Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSGdISGCu_9wPVGkIl6Cu1HSfbIskoB1e8Q&s" },
    { id: 4, name: 'Cinemica Bot', message: "Click to Verify", Image: "https://pbs.twimg.com/profile_images/1559489510819479554/UCmSSTlG_400x400.jpg" },
];

const { width } = Dimensions.get('screen');

const Screen3 = () => {
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

export default Screen3;
