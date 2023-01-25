import {useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";

const User = ({user}) => {
    const [posts, setPosts] = useState(null);

    const getPosts = () => {
        postService.getUserPosts(user.id).then(value => value.data).then(value => setPosts([...value]))
    }

    return (
        <div>
            <div>Id: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            {!posts && <button onClick={() => getPosts()}>click me</button>}
            {posts && <button onClick={() => setPosts([])}>clear</button>}
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            <hr/>
        </div>
    );
};

export {
    User
};