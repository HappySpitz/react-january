import React from 'react';

import {Comment} from "../Comment/Comment";

const Comments = ({comments}) => {
    return (
        <div>
            <h1>Comments</h1>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments
};