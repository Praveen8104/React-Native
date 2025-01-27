import { Table, Row, Rows } from "react-native-table-component";
import { View, ScrollView, StyleSheet } from "react-native";

function Tables() {

    const data = {
        tableHead: ['Name', 'Roll', 'Mobile', 'Branch', 'College'],
        tableData: [
            ['Praveen Reddy', '22MH1A4220', '9876543210', 'AI&ML', 'ACOE'],
            ['Sricharan', '22MH1A4223', '9876543210', 'CSE', 'ACET'],
            ['Charan Raju', '22MH1A4250', '9876543210', 'AI&ML', 'ACET'],
            ['Karthik', '22MH1A4254', '9876543210', 'ECE', 'ACET'],
            ['Praveen Reddy', '22MH1A4220', '9876543210', 'AI&ML', 'ACET'],
            ['Sricharan', '22MH1A4223', '9876543210', 'CSE', 'ACET'],
            ['Charan Raju', '22MH1A4250', '9876543210', 'AI&ML', 'ACET'],
            ['Karthik', '22MH1A4254', '9876543210', 'ECE', 'ACET'],
            ['Karthik', '22MH1A4254', '9876543210', 'ECE', 'ACET'],
            ['Karthik', '22MH1A4254', '9876543210', 'ECE', 'ACET'],
        ],
    }

    return (
        <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} >
                <ScrollView vertical={true} showsVerticalScrollIndicator={true} style={{height: 'auto', top: 30}}>
                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                            <Row data={data.tableHead}
                                widthArr={[130, 120, 120, 120, 120]}
                                style={styles.head}
                                textStyle={styles.inside_text_1}  />

                            <Rows data={data.tableData} widthArr={[130, 120, 120, 120, 120]} textStyle = {{textAlign : 'center'}} 
                                style={styles.data}
                            />

                            {
                                data.tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={[130, 120, 120, 120, 120]}
                                        style={[styles.data, index % 2 && { backgroundColor: 'lightgrey' }]}
                                        textStyle={styles.inside_text_2}
                                    />
                                ))
                            }
                        </Table>
                    </View>
                </ScrollView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    data: {
        height: 40,
    },
    inside_text_1: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inside_text_2: {
        fontSize: 14,
        textAlign: 'center'
    }
})

export default Tables;
