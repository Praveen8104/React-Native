import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const chatlist = [
    { id: 1, name: 'Saved Messages', message: 'No Saved Messages', Image: "https://cdn-icons-png.flaticon.com/512/10329/10329949.png", timestamp: '10:05 AM' },
    { id: 2, name: 'Praveen Reddy (You)', message: 'Hey there!', Image: "https://circleofcricket.com/post_image/post_image_9632bcb.jpg", timestamp: '9:30 AM' },
    { id: 3, name: 'Sricharan', message: 'How are you?', Image: "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg", timestamp: '8:15 AM' },
    { id: 4, name: 'Charan Raju', message: 'Good morning!', Image: "https://static.cricketaddictor.com/wp-content/uploads/2021/07/Virender-Sehwag.jpg?q=80", timestamp: '7:50 AM' },
    { id: 5, name: 'Karthik', message: "What's up?", Image: "https://pbs.twimg.com/profile_images/1559489510819479554/UCmSSTlG_400x400.jpg", timestamp: '11:05 PM' },
    { id: 6, name: 'Pranay', message: 'See you soon.', Image: "https://www.koimoi.com/wp-content/new-galleries/2021/10/allu-arjuns-fans-worried-about-director-jinx-001.jpg", timestamp: '6:45 PM' },
    { id: 7, name: 'Vishnu', message: 'Take care!', Image: "https://images.mykhel.com/webp/images/cricket/players/2/11022.jpg", timestamp: '3:20 PM' },
    { id: 8, name: 'Ravindra Reddy', message: "Let's meet up.", Image: "https://www.cinejosh.com/newsimg/newsmainimg/prabhas-donates-rs-35-lakhs-to-the-tfda_b_2304241033.jpg", timestamp: '2:00 PM' },
    { id: 9, name: 'Jitendra', message: 'Call me later.', Image: "https://images.cnbctv18.com/uploads/2024/05/ms-dhoni-2024-05-7ce78cfe2d35005a8ac9500925d41872.jpg?impolicy=website&width=400&height=225", timestamp: '12:30 PM' },
    { id: 10, name: 'Jayaram', message: 'Congratulations!', Image: "https://circleofcricket.com/post_image/post_image_9632bcb.jpg", timestamp: '9:50 AM' },
];

const { width } = Dimensions.get('screen');

const Screen1 = () => {
    const navigation = useNavigation();

    const fun = (name, message, timestamp) => {
        navigation.navigate('ChatScreen', { name, message, timestamp });
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                {chatlist.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => fun(item.name, item.message, item.timestamp)} activeOpacity={1}>
                        <View style={{ flexDirection: 'row', padding: 10, borderBottomColor: 'grey', width: width }}>
                            <Image source={{ uri: item.Image }} style={{ width: 55, height: 55, borderRadius: 50 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                                <Text style={{ fontSize: 15, color: 'grey' }}>{item.message}</Text>
                            </View>
                            <View style={{ position: 'absolute', right: 10, top: 20 }}>
                                <Text style={{ fontSize: 15, color: 'grey' }}>{item.timestamp}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Screen1;
