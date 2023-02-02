import React, {useContext} from 'react';

import {Todos} from "../../components";
import {MyContext} from "../../index";

const TodosPage = () => {
    const context = useContext(MyContext)
    context.gender = 'male';
    Object.assign(context, {status: true});
    delete context.name
    return (
        <div>
            <Todos/>
        </div>
    );
};

export {
    TodosPage
};