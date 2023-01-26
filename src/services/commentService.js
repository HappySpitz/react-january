import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    getComments: () => axiosService.get(urls.comments),
    createComment: (newComment) => axiosService.post(urls.comments, newComment)
}

export {
    commentService
}