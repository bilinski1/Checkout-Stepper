import { configureStore } from '@reduxjs/toolkit'
import { rootReducer, cardReducer } from './rootSlice'


export const store = configureStore({
    reducer: {
        root: rootReducer, 
        cards: cardReducer,}
})