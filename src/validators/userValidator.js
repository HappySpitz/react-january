import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-z0-9_*-]{3,16}$/).required(),
    email: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
    username: Joi.string().regex(/^[a-z0-9_*-]{3,16}$/).required()
})

export {
    userValidator
}