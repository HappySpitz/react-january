import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    loading: null,
    carUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
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
            thunkAPI.dispatch(getAll())
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
                state.loading = false
                state.cars = action.payload
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