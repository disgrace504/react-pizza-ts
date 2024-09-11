import { createSlice } from '@reduxjs/toolkit'
import { IPizza} from '../../types/pizza.types'


export interface pizzasState {
  pizzas: IPizza[]
}

const initialState: pizzasState = {
  pizzas: [],
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload
    },
  },
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer
