import {useReducer, useRef} from "react";

// import {Comments, Posts} from "./components";
import {Cats, Dogs} from "./components";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastElement] = state.cats.slice(-1);
            const id = lastElement ? lastElement.id + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: action.payload}]}
        case 'DEL_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
            return {...state}
        case 'ADD_DOG':
            const [lastElementDog] = state.dogs.slice(-1);
            const idDog = lastElementDog ? lastElementDog.id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id: idDog, name: action.payload}]}
        case 'DEL_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}
    }
}

const App = () => {
    const dogRef = useRef();
    const catRef = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data)

    const createCat = () => {
        dispatch({type: 'ADD_CAT', payload: catRef.current.value})
        catRef.current.value = ''
    };

    const createDog = () => {
        dispatch({type: 'ADD_DOG', payload: dogRef.current.value})
        dogRef.current.value = ''
    };

    return (
        <div>
            {/*<Posts/>*/}
            {/*<Comments/>*/}
            <div>
                <input type="text" placeholder={'cat'} ref={catRef}/>
                <button onClick={createCat}>Save</button>
            </div>
            <div>
                <input type="text" placeholder={'dog'} ref={dogRef}/>
                <button onClick={createDog}>Save</button>
            </div>
            <hr/>
            <Cats cats={state.cats} dispatch={dispatch}/>
            <Dogs dogs={state.dogs} dispatch={dispatch}/>
        </div>
    );
}

export {
    App
}