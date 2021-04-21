import axios from "axios";

const instance = axios.create({
    baseURL:'https://react-my-burger-3c8e4-default-rtdb.firebaseio.com/'
});

export default instance;