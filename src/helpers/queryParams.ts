export const getPizzasParams = (
  activeCategory: number,
  selectedSort: { sortProperty: string },
  searchValue: string,
  currentPage: number
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
