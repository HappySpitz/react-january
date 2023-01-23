import React, {useEffect, useState} from 'react';
import {axiosSpacexService} from "../../services";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axiosSpacexService.then(value => value.data).then(value => setLaunches([...value]))
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