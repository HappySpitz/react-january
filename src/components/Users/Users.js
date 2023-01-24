import React, {useEffect, useState} from 'react';

import {userService} from "../../services";

import {User} from "../User/User";
import {UserPosts} from "../UserPosts/UserPosts";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        userService.getAllUsers().then(value => value.data).then(value => setUsers([...value]))
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user} setUserPosts={setUserPosts}/>)}

            {userPosts && <UserPosts/>}
        </div>
    );
};

export {
    Users
};