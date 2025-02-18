import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const data = [
    {
        name: 'Praveen Reddy',
        roll: '22MH1A4220',
        mobile: '7997442758',
        college: 'ACET',
        branch: 'AI&ML',
        email: '22mh1a4220@acoe.edu.in'
    },
    {
        name: 'Sricharan',
        roll: '22MH1A4223',
        mobile: '9876543210',
        college: 'ACET',
        branch: 'CSE',
        email: '22mh1a4223@acoe.edu.in'
    },
    {
        name: 'Charan Raju',
        roll: '22MH1A4250',
        mobile: '9876543210',
        college: 'ACET',
        branch: 'AI&ML',
        email: '22mh1a4250@acoe.edu.in'
    },
    {
        name: 'Karthik',
        roll: '22MH1A4254',
        mobile: '9876543210',
        college: 'ACET',
        branch: 'ECE',
        email: '22mh1a4254@acoe.edu.in'
    },
]

function Card() {
    return (
        <>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    {data.map((item,key) => (
                        <View style={styles.card} key = {key}>

                            <View style={styles.photo}>
                                <Image source={{ uri: `https://info.aec.edu.in/${item.college}/StudentPhotos/${item.roll}.jpg` }} style={{ height: "100%", width: "100%", borderRadius: 100 }} />
                            </View>

                            <View style={styles.details}>
                                <Text style={styles.text}>Name: {item.name}</Text>
                                <Text style={styles.text}>Roll ID: {item.roll}</Text>
                                <Text style={styles.text}>Phone: {item.mobile}</Text>
                                <Text style={styles.text}>Branch: {item.branch}</Text>
                                <Text style={styles.text}>College: {item.college}</Text>
                                <Text style={styles.text}>Email: {item.email}</Text>
                            </View>

                        </View>
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 40,
        padding: 35,
        backgroundColor: 'lightgray',
    },
    card: {
        height: 360,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 8,
        top: 20,
    },
    photo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        top: -65,
    },
    details: {
        alignSelf: 'center',
        rowGap: 10,
        padding: 10,
        top: -30,
    },
    text: {
        fontSize: 16,
    }
})

export default Card;
