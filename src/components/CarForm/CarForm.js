import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand);
            setValue('price', carUpdate.price);
            setValue('year', carUpdate.year);
        }
    }, [carUpdate])

    const create = async (car) => {
        await dispatch(carActions.createCar({car}))
        reset()
    };

    const update = async (car) => {
        await dispatch(carActions.updateCar({id: carUpdate.id, car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carUpdate?update:create)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate?'Update':'Create'}</button>
        </form>
    );
};

export {
    CarForm
};