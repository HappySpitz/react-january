import React from 'react';

const UserPost = ({userPost}) => {
    return (
        <div>
            <div>Id: {userPost.id}</div>
            <div>UserId: {userPost.userId}</div>
            <div>Title: {userPost.title}</div>
            <div>Body: {userPost.body}</div>
            <hr/>
        </div>
    );
};

export {
    UserPost
}