import { createSlice } from '@reduxjs/toolkit'
import { IPizza } from '../../types/pizza.types'

export interface pizzasState {
  cartPizzas: IPizza[]
  totalPrice: number
  totalPizzas: number
}

const initialState: pizzasState = {
  cartPizzas: [],
  totalPrice: 0,
  totalPizzas: 0,
}

export const cartSlice = createSlice({
  name: 'cartPizzas',
  initialState: initialState,
  reducers: {
    addCartPizza(state, action) {
      const findItem = state.cartPizzas.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.cartPizzas = [...state.cartPizzas, { ...action.payload, count: 1 }]
      }

      state.totalPrice += action.payload.price
      state.totalPizzas = state.cartPizzas.reduce((total, pizza) => total + pizza.count, 0)
    },

    removeCartPizza(state, action) {
      const findItem = state.cartPizzas.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--
        } else {
          state.cartPizzas = state.cartPizzas.filter((obj) => obj.id !== action.payload.id)
        }
      }

      state.totalPrice -= action.payload.price
      state.totalPizzas = state.cartPizzas.reduce((total, pizza) => total + pizza.count, 0)
    },

    removePizzas(state, action) {
      state.cartPizzas = state.cartPizzas.filter((obj) => obj.id !== action.payload.id)
      state.totalPizzas = state.cartPizzas.reduce((total, pizza) => total + pizza.count, 0)
      state.totalPrice = state.totalPrice - action.payload.price * action.payload.count
    },

    clearCart(state) {
      state.cartPizzas = []
      state.totalPrice = 0
      state.totalPizzas = 0
    },
  },
})

export const { addCartPizza, removeCartPizza, removePizzas, clearCart } = cartSlice.actions
export default cartSlice.reducer
