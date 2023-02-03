import React from 'react';

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => dispatch({type: 'DEL_DOG'})}>delete</button>
            <hr/>
        </div>
    );
};

export {
    Dog
};