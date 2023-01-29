import {useEffect, useState} from "react";

// import {CommentForm, Comments} from "./components";
// import {commentService} from "./services";

// import {userService} from "./services";
// import {UserForm, Users} from "./components";

import {Cars, CarForm} from "./components";
import {carService} from "./services";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [comments, setComments] = useState([]);

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

  // useEffect(() => {

    //   userService.getUsers().then(value => value.data).then(value => setUsers([...value]))
    // }, []);
  // useEffect(() => {

    //     commentService.getComments().then(value => value.data).then(value => setComments([...value]))
    // }, [])

    useEffect(() => {
        carService.getAll().then(({data})=>setCars([...data]))
    }, [])

    return (
      <div>
        {/*<div>*/}
        {/*  <UserForm setUsers={setUsers}/>*/}
        {/*  <hr/>*/}
        {/*  <Users users={users}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <CommentForm setComments={setComments}/>*/}
        {/*  <hr/>*/}
        {/*  <Comments comments={comments}/>*/}
        {/*</div>*/}
          <CarForm setCars={setCars} updateCar={updateCar}/>
          <hr/>
          <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
      </div>
  );
}

export {
  App
};
