import React from 'react';
import {useSelector} from "react-redux";

import {CarForm, Cars} from "../../components";

const CarsPage = () => {
    const {loading, errors} = useSelector(state => state.cars);

    return (
        <div>
            <CarForm/>
            <hr/>
            {loading && <h1>Loading....</h1>}
            {errors && JSON.stringify(errors)}
            <Cars/>
        </div>
    );
};

export {
    CarsPage
};