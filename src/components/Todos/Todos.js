import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos([...data]))
    }, [])

    return (
        <div>
            {todos.map(todosOne => <Todo key={todosOne.id} todosOne={todosOne}/>)}
        </div>
    );
};

export {
    Todos
};