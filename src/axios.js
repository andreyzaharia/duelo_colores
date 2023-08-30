import axios from "axios";
import state from "./store/state";

const http = axios.create({
    baseURL: state.defaultApiRoute,
});

export default http;