import axios from "axios";

const axiosSpacexService = axios.get("https://api.spacexdata.com/v3/launches/");

export {
    axiosSpacexService
}