import React from 'react';

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => dispatch({type: 'DEL_CAT'})}>delete</button>
            <hr/>
        </div>
    );
};

export {
    Cat
};