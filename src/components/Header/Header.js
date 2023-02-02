import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user, logOut} = useAuthContext();

    return (
        <div className={css.Header}>
            <NavLink to={""}>home</NavLink>
            <NavLink to={"albums"}>albums</NavLink>
            <NavLink to={"todos"}>todos</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
            {user && <div>
                {user} <button onClick={logOut}>logOut</button>
            </div>}
        </div>
    );
};

export {
    Header
};