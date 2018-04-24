import axios from "axios";

export default axios.create({
    baseURL: "http://homestead.test/api/",
    params: {
        // key: "d43ebd665ced71fb4a381c362d024aa1c70d7cee",
    },
    headers: {
        Accept: "application/json",
    },
});