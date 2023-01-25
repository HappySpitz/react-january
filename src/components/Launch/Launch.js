import React from 'react';

const Launch = ({launch}) => {
        return (
            <div>
                <div>Mission_name: {launch.mission_name}</div>
                <div>Launch_year: {launch.launch_year}</div>
                <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
            </div>
        );
};

export {
    Launch
};