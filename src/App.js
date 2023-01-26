import {useEffect, useState} from "react";

import {CommentForm, Comments} from "./components";
import {commentService} from "./services";

// import {userService} from "./services";
// import {UserForm, Users} from "./components";

const App = () => {
  // const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   userService.getUsers().then(value => value.data).then(value => setUsers([...value]))
  // }, []);

  useEffect(() => {
      commentService.getComments().then(value => value.data).then(value => setComments([...value]))
  }, [])

  return (
      <div>
        {/*<div>*/}
        {/*  <UserForm setUsers={setUsers}/>*/}
        {/*  <hr/>*/}
        {/*  <Users users={users}/>*/}
        {/*</div>*/}
        <div>
          <CommentForm setComments={setComments}/>
          <hr/>
          <Comments comments={comments}/>
        </div>
      </div>
  );
}

export {
  App
};
