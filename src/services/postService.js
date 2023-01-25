import {axiosJsonService} from "./axiosJsonService";

const postService = {
    getAllPosts: () => axiosJsonService.get('/posts'),
    getUserPosts: (userId) => axiosJsonService.get(`/posts`, {params: {userId}})
}

export {
    postService
}