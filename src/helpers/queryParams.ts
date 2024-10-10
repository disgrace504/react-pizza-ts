import { IParams } from '../types/pizza.types'

export const getPizzasParams = (
  activeCategory: IParams['activeCategory'],
  selectedSort: IParams['selectedSort'],
  searchValue: IParams['searchValue'],
  currentPage: IParams['currentPage']
) => {
  const itemsPerPage = 4

  return {
    category: activeCategory > 0 ? activeCategory : undefined,
    sortBy: selectedSort.sortProperty.replace('-', ''),
    order: selectedSort.sortProperty.includes('-') ? 'asc' : 'desc',
    search: searchValue || undefined,
    limit: itemsPerPage,
    page: currentPage,
  }
}
