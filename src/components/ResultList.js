import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableOpacityComponent } from "react-native";
import ResultDetail from './ResultDetail';
import { withNavigation } from "react-navigation";

const ResultList = ({title, results, navigation}) => {

    if (!results.length) {
        return null
    }
    return(
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor = {result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultShow", {id: item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity> 
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});

export default withNavigation(ResultList);