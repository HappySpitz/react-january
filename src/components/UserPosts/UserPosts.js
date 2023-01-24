import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {UserPost} from "../UserPost/UserPost";

const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getUserPosts().then(value => value.data).then(value => setUserPosts([...value]))
    }, [])

    return (
        <div>
            <h1>User's Posts</h1>
            {userPosts.map(userPost => <UserPost key={userPost.userId} userPost={userPost}/>)}
        </div>
    );
};

export {
    UserPosts
};