import React from 'react';
import './simpson.css'

export const Simpson = ({simpsonName, info, phrases1, phrases2, phrases3, image}) => {
    return (
        <div className={"Simpson"}>
            <h2>{simpsonName}</h2>
            <p>{info}</p>
            <ul className={"list"}>
                <li>{phrases1}</li>
                <li>{phrases2}</li>
                <li>{phrases3}</li>
            </ul>
            <img className={"simpsonImage"} src={image} alt={simpsonName}/>
            <div className={"line"}> </div>
        </div>
    );
};