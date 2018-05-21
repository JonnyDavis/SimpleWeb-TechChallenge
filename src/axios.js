import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.217:8000/api/",
    headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
    },
});


// local ip 192.168.1.217
// server ip 192.168.10.10