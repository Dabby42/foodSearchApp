import {useState, useEffect} from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] =useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const searchApi = async (searchTerm) => {
        
        try {
            const response = await yelp.get("/search", {
                params:{
                    limit: 50,
                    location: "san jose",
                    term: searchTerm
                }
            })
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMsg("Sorry something went wrong!")
        }
    }

    useEffect(() => {
        searchApi("fries");
    }, [])

    return [searchApi, results, errorMsg]
}