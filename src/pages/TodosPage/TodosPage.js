import React from 'react';
import {Outlet} from "react-router-dom";

import {Todos} from "../../components";

const TodosPage = () => {
    return (
        <div>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export {
    TodosPage
};