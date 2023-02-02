import React, {useContext} from 'react';
import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";

const HomePage = () => {
    const context = useContext(MyContext);
    return (
        <div>
            <Button click={() => console.log('click from custom button')} style={{backgroundColor: 'black'}}>click me</Button>
            {/*<div>name: {context.name}</div>*/}
            {/*<div>age: {context.age}</div>*/}
            {JSON.stringify(context)}
        </div>
    );
};

export {
    HomePage
};