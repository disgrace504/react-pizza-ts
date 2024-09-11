import { createSlice } from '@reduxjs/toolkit'

export interface paginationState {
  currentPage: number
}

const initialState: paginationState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload + 1
    },
  },
})

export const { setCurrentPage } = paginationSlice.actions

export default paginationSlice.reducer
