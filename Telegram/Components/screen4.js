import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const chatlist = [
    { id: 2, name: 'Disney+ Hotstar', message: 'IND vs ENG', Image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/104/MTA-138785252/disney_disney_hotstar_premium_-_hot_star_id_full01_bdyzfmqn.jpg" },
    { id: 3, name: 'TNT Sports', message: 'Virat 81st Century', Image: "https://yt3.googleusercontent.com/o20nhOnGZuSG8W_gl7LkuSlTKPMZJfDin3VlPFn3C3GcCso-ZhPaDnR7dTEUyyCS5jWB9p7i=s900-c-k-c0x00ffffff-no-rj" },
    { id: 4, name: 'Star Sports', message: "U19 Womens World Cup", Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjR_YvDREb-HXsR2bzTJwkxBjhAkQ1gt6Tw&s" },
];

const { width } = Dimensions.get('screen');

const Screen4 = () => {
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

export default Screen4;
