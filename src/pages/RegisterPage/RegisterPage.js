import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../../services";
import {userValidator} from "../../validators";

const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });
    const navigate = useNavigate();
    const [error, setError] = useState();

    const registerUser = async (user) => {
        try {
            await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data.detail)
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    {errors.username && <span>{errors.username.message}</span>}
                    <input type="password" placeholder={'password'} {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                    <button>Register</button>
                </form>
            </div>
            {error && <div>{error}</div>}
        </div>
    );
};

export {
    RegisterPage
};