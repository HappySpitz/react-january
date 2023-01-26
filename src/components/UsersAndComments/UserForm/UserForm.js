import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../../../services";
import {userValidator} from "../../../validators";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const submit = async (user) => {
        const {data} = await userService.createUser(user);
        setUsers(prev => [...prev, data]);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export {
    UserForm
};