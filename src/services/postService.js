import {axiosJsonService} from "./axiosJsonService";

const postService = {
    getAllPosts: () => axiosJsonService.get('/posts')
}

export {
    postService
}