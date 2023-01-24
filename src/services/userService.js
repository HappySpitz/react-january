import {axiosJsonService} from "./axiosJsonService";

const userService = {
    getAllUsers: () => axiosJsonService.get('/users'),
    getUserPosts: (id) => axiosJsonService.get(`/users/${id}/posts`)
}

export {
    userService
}