import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, errors, loading} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div style={{width: '45%'}}>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading...........</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};