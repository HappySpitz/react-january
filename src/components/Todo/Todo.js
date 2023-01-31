import React from 'react';

const Todo = ({todosOne}) => {
    const {userId, id, title} = todosOne;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {
    Todo
};