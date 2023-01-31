import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
   getALL: () => axiosService.get(urls.comments)
}

export {
    commentsService
}