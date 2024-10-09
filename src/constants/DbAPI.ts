import axios from "axios";

export const DbAPI = axios.create({
    baseURL: "https://dragonball-api.com/api"
})