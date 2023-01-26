import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService = {
    getUsers: () => axiosService.get(urls.users),
    createUser: (newUser) => axiosService.post(urls.users, newUser)
};

export {
    userService
}