import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    prev: null,
    next: null,
    errors: null,
    loading: null,
    carUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll({page: 1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        updateCarById: (state, action) => {
            state.carUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload;
                state.loading = false
                state.cars = items
                state.prev = prev
                state.next = next
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, state => {
                state.loading = true
            })
});

const {reducer: carReducer, actions: {updateCarById}} = carSlice;

const carActions = {
    getAll,
    createCar,
    deleteCar,
    updateCar,
    updateCarById
}

export {
    carReducer,
    carActions
}