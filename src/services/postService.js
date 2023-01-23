import {axiosJsonService} from "./axiosJsonService";

const postService = {
    getAll: () => axiosJsonService.get('/posts')
}

export {
    postService
}