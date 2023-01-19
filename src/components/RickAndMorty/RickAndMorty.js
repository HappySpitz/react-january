import React from 'react';
import './RickAndMorty.css'

export const RickAndMorty = ({id, name, status, species, gender, image}) => {
    return (
        <div className={"card"}>
            <h2>{name}</h2>
            <div><b>Id:</b> {id}</div>
            <div><b>Status:</b> {status}</div>
            <div><b>Species:</b> {species}</div>
            <div><b>Gender:</b> {gender}</div>
            <img className={"image"} src={image}/>
        </div>
    );
};