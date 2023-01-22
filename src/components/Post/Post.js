import React from 'react';

const Post = ({post, setPostDetails}) => {
    return (
        <div>
            <div>{post.id}. {post.title}</div>
            <button onClick={() => setPostDetails(post)}>post details</button>
        </div>
    );
};

export {
    Post
};