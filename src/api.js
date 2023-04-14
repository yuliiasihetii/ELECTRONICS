import { API } from "./config";
import axios from "axios";

export default axios.create({
    baseURL: API
})