import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost, apiPost} = useSelector(state => state.posts);
    
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div style={{width: '45%'}}>
                {selectedUser && selectedUser.name}
            </div>
            <hr/>
            <div style={{width: '45%'}}>
                {selectedPost && selectedPost.title}
                <hr/>
                {apiPost && apiPost.title}
            </div>
        </div>
    );
};

export {
    Header
};