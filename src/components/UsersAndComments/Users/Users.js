import React from 'react';

import {User} from "../User/User";

const Users = ({users}) => {
    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};