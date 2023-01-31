import React, {useEffect, useState} from 'react';

import {postService} from "../../services";

const Post = ({postId}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data}) => {setPost(data)})
    }, [postId])

    return (
        <div>
            {post &&
                <>
                    <div>userId: {post.userId}</div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>
            }
        </div>
    );
};

export {
    Post
};