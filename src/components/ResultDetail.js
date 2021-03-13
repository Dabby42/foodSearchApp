import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text>{result.rating} Stars {result.review_count} reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        borderRadius: 4,
        width: 250,
        height: 120,
        marginBottom: 5
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: 16
    },
    container:{
        marginLeft: 15
    }
});

export default ResultDetail;