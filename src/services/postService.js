import {axiosService} from "./axiosService";

const postService = {
    getAll: () => axiosService.get('/posts'),
    getOne: (id) => axiosService.get('/posts/${id}')
}

export {
    postService
}