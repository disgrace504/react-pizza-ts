import { createSlice } from '@reduxjs/toolkit'
import { sortList } from '../../data/data'

export interface filtersState {
  activeCategory: {
    index: number
  }
  searchValue: string
  selectedSort: {
    id: number
    title: string
    sortProperty: string
  }
}

const initialState: filtersState = {
  activeCategory: { index: 0 },
  searchValue: '',
  selectedSort: sortList[0],
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSelectedSort(state, action) {
      state.selectedSort = action.payload
    },
  },
})

export const { setActiveCategory, setSearchValue, setSelectedSort } = filtersSlice.actions

export default filtersSlice.reducer
