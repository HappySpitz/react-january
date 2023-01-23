import axios from "axios";

const axiosJsonService = axios.create({baseURL: "https://jsonplaceholder.typicode.com"});

export {
    axiosJsonService
}