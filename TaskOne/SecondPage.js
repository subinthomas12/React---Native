import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function SecondPage() {
    const route = useRoute();

    const data = route.params?.data || '';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.dataText}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'blue',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    dataText: {
        fontSize: 22,
        color: 'red',
        textAlign: 'center'
    },
});

export default SecondPage;
