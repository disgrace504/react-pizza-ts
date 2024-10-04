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
  currentPage: number
}

const initialState: filtersState = {
  activeCategory: { index: 0 },
  searchValue: '',
  selectedSort: sortList[0],
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload + 1
    },
    setUrlFilters(state, action) {
      state.selectedSort = action.payload.sort
      state.activeCategory = action.payload.category
      state.currentPage = action.payload.currentPage
    },
  },
})

export const { setActiveCategory, setSearchValue, setSelectedSort, setCurrentPage, setUrlFilters } =
  filtersSlice.actions

export default filtersSlice.reducer
