//TODO: перевести на redux

import { createContext, ReactNode, useEffect, useRef } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getPizzasParams } from '../helpers/queryParams'
import { setPizzas } from '../redux/slices/pizzasSlice'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { setUrlFilters } from '../redux/slices/filtersSlice'
import { categories, sortList } from '../data/data'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL
interface AppContextInterface {
  isPizzasLoading: boolean
  pizzaError: string

  debouncedSearchValue: string
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { selectedSort, searchValue, activeCategory } = useSelector((state: RootState) => state.filters)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isUrlFilters = useRef(false)
  const isMounted = useRef(false)

  const currentPage = useSelector((state: RootState) => state.filters.currentPage)

  const debouncedSearchValue = useDebounce(searchValue, 700)

  const [fetchPizzas, isPizzasLoading, pizzaError, setPizzaError] = useFetching(async () => {
    const response = await getPizzas(
      pizzasUrl,
      getPizzasParams(activeCategory.index, selectedSort, debouncedSearchValue, currentPage)
    )
    dispatch(setPizzas(response.data))
  })

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: selectedSort.sortProperty,
        category: activeCategory.index,
        currentPage: currentPage,
      })
      navigate(`?${queryString}`)
    }

    isMounted.current = true
  }, [activeCategory, selectedSort, currentPage])

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy)
      const category = categories.find((obj) => obj.index === Number(params.category))
      const currentPage = params.currentPage

      dispatch(setUrlFilters({ currentPage, sort, category }))
      isUrlFilters.current = true
    }
  }, [])

  useEffect(() => {
    if (!isUrlFilters.current) {
      fetchPizzas()
    }
    isUrlFilters.current = false

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
