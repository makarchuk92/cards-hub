import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardApi } from "../services/CardService";
import cardsReducer from "../services/CardSlice"

const rootReducer = combineReducers({
    [cardApi.reducerPath]: cardApi.reducer,
    cards: cardsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([
            cardApi.middleware,
            
        ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch