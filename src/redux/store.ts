import { configureStore } from '@reduxjs/toolkit'
import pizzasReducer from './slices/pizzasSlice'
import filtersReducer from './slices/filtersSlice'

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    filters: filtersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
