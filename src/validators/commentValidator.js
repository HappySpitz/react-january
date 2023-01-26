import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(100).required(),
    name: Joi.string().regex(/^[a-z0-9_*-]{3,16}$/).required(),
    email: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
    body: Joi.string().regex(/^[a-z0-9_*-]{3,250}$/).required()
})

export {
    commentValidator
}