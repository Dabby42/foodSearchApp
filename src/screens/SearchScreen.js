import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const[term, setTerm] = useState("");
    const [searchApi, results, errorMsg] = useResults();
    console.log(results)

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                {errorMsg? <Text>{errorMsg}</Text>: null}
                <ResultList title="Cost Effective" results={filterResultsByPrice("$")}/>
                <ResultList title="Bit Pricer" results={filterResultsByPrice("$$")}/>
                <ResultList title="Big Spender" results={filterResultsByPrice("$$$")}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;