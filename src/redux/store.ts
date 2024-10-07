import { configureStore } from '@reduxjs/toolkit'
import pizzasReducer from './slices/pizzasSlice'
import filtersReducer from './slices/filtersSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
