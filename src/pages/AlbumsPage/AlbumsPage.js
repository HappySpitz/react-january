import React from 'react';
import {Outlet} from "react-router-dom";

import {Albums} from "../../components";

const AlbumsPage = () => {
    return (
        <div>
            <Albums/>
        </div>
    );
};

export {
    AlbumsPage
};