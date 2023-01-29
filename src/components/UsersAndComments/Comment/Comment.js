import React from 'react';

const Comment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {
    Comment
};