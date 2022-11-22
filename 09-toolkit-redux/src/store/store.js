import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todosApi";
import { counterSlice } from './slices/counter'
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(todosApi.middleware)
})