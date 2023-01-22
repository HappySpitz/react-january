import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {
const [posts, setPosts] = useState([])

useEffect(() => {
    postService.getAll().then(value => value.data).then(value => setPosts([...value]))
}, [])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <Post key = {post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};