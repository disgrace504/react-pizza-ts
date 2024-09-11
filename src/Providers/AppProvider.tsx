//TODO: перевести на redux

import { createContext, ReactNode, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getPizzasParams } from '../helpers/queryParams'
import { setPizzas } from '../redux/slices/pizzasSlice'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL
interface AppContextInterface {
  isPizzasLoading: boolean
  pizzaError: string

  debouncedSearchValue: string
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { selectedSort, searchValue, activeCategory } = useSelector((state: RootState) => state.filters)

  const dispatch = useDispatch()

  const currentPage = useSelector((state: RootState) => state.pagination.currentPage)

  const debouncedSearchValue = useDebounce(searchValue, 700)

  const [fetchPizzas, isPizzasLoading, pizzaError, setPizzaError] = useFetching(async () => {
    const response = await getPizzas(
      pizzasUrl,
      getPizzasParams(activeCategory.index, selectedSort, debouncedSearchValue, currentPage)
    )
    dispatch(setPizzas(response.data))
  })

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

  return (
    <AppContext.Provider
      value={{
        isPizzasLoading,
        pizzaError,

        debouncedSearchValue,
      }}>
      {children}
    </AppContext.Provider>
  )
}
