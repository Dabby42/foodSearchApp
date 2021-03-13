import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer Pf31McXwUu411XCtEvFeoLjXi_9u8Vel17qR3RCjNABE-KKAbHrRcqcMb_TDp93uKe0wy9zxhPNdKMlXeYyFzEM7cAzODEKEb0kjn-75vurgvho0VxCjvLsG-1znX3Yx"
    }
})