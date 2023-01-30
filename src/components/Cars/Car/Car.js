import {carService} from "../../../services";

const Car = ({car,setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car;

    const deleteCarById = async (id) => {
       try {
           await carService.deleteById(id)
           const {data} = await carService.getAll()
           setCars([...data])
       } catch (e) {
           console.log(e);
       }
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