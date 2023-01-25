import React, {useEffect, useState} from 'react';

import {axiosSpacexService} from "../../services";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axiosSpacexService.then(value => value.data).then(value => setLaunches(value.filter(item => item.launch_year !== '2020')))
    }, [])

    return (
        <div>
            <h1>Launches</h1>
            {launches.map(launch => <Launch key = {launch.flight_number} launch = {launch}/>)}
        </div>
    );
};

export {
    Launches
};