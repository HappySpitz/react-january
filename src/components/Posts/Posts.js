import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {
const [posts, setPosts] = useState([]);
const [postDetails, setPostDetails] = useState(null);

useEffect(() => {
    postService.getAllPosts().then(value => value.data).then(value => setPosts([...value]))
}, [])

    return (
        <div>
            <h1>Post Details</h1>
            {postDetails &&
                <div>
                    <div>Id: {postDetails.id}</div>
                    <div>UserId: {postDetails.userId}</div>
                    <div>Title: {postDetails.title}</div>
                    <div>Body: {postDetails.body}</div>
                </div>
            }

            <hr/>

            <h1>Posts</h1>
            {posts.map(post => <Post key = {post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {
    Posts
};