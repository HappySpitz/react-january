import {carService} from "../../../services";

const Car = ({car,setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car;

    const deleteCarById = (id) => {
       carService.deleteById(id).then(async () => {
           const {data} = await carService.getAll()
           setCars([...data])
       }).catch(err => console.log(err))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setUpdateCar(car)}>update</button>
            <button onClick={()=> deleteCarById(id)}>delete</button>
        </div>
    );
};

export {Car};