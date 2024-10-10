import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IAxiosParams, IPizza } from '../../types/pizza.types'
import axios from 'axios'

export interface pizzasState {
  pizzas: IPizza[]
  status: string
}

const initialState: pizzasState = {
  pizzas: [],
  status: 'loading',
}

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ url, params }: { url: string; params: IAxiosParams }) => {
    const response = await axios.get(url, {
      params: {
        ...params,
      },
    })
    return response.data
  }
)

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading'
        state.pizzas = []
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload
        state.status = 'success'
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error'
        state.pizzas = []
      })
  },
})

export const { setPizzas } = pizzasSlice.actions
export default pizzasSlice.reducer
