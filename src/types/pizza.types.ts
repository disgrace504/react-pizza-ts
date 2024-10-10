export interface IPizza {
  id: number
  title: string
  price: number
  sizes: number[]
  imageUrl: string
  types: number[]
  type: number
  count: number
}

export interface IParams {
  activeCategory: number
  selectedSort: { sortProperty: string }
  searchValue: string
  currentPage: number
}

export interface IAxiosParams {
  category?: number
  sortBy: string
  order: string
  search?: string
  limit: number
  page: number
}
