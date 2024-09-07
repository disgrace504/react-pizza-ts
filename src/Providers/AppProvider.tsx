//TODO: перевести на redux

import { createContext, useState, ReactNode, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasService'
import { IPizzaProps } from '../components/Pizza/Pizza'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL
interface AppContextInterface {
  pizzas: IPizzaProps[]
  isPizzasLoading: boolean
  pizzaError: string

  activeCategory: number
  setActiveCategory: (activeCategory: number) => void

  selectedSort: { id: number; title: string; sortProperty: string }
  setSelectedSort: (sort: { id: number; title: string; sortProperty: string }) => void

  searchValue: string
  setSearchValue: (searchValue: string) => void

  currentPage: number
  setCurrentPage: (currentPage: number) => void

  debouncedSearchValue: string
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [selectedSort, setSelectedSort] = useState<{ id: number; title: string; sortProperty: string }>({
    id: 0,
    title: 'популярности',
    sortProperty: 'rating',
  })
  const [searchValue, setSearchValue] = useState<string>('')

  const [pizzas, setPizzas] = useState<IPizzaProps[]>([])

  const debouncedSearchValue = useDebounce(searchValue, 700)

  const [fetchPizzas, isPizzasLoading, pizzaError, setPizzaError] = useFetching(async () => {
    const response = await getPizzas(pizzasUrl, params)
    setPizzas(response.data)
  })

  const itemsPerPage = 4

  useEffect(() => {
    fetchPizzas()
    if (debouncedSearchValue) {
      setPizzaError('')
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [debouncedSearchValue, activeCategory, selectedSort, currentPage])

  const params = {
    category: activeCategory > 0 ? activeCategory : undefined,
    sortBy: selectedSort.sortProperty.replace('-', ''),
    order: selectedSort.sortProperty.includes('-') ? 'asc' : 'desc',
    search: debouncedSearchValue || undefined,
    limit: itemsPerPage,
    page: currentPage,
  }

  return (
    <AppContext.Provider
      value={{
        pizzas,
        isPizzasLoading,
        pizzaError,

        searchValue,
        setSearchValue,
        debouncedSearchValue,

        activeCategory,
        setActiveCategory,

        selectedSort,
        setSelectedSort,

        currentPage,
        setCurrentPage,
      }}>
      {children}
    </AppContext.Provider>
  )
}
