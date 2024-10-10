import { createContext, ReactNode, useEffect, useRef } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { getPizzasParams } from '../helpers/queryParams'
import { fetchPizzas } from '../redux/slices/pizzasSlice' // Импортируем fetchPizzas
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { setUrlFilters } from '../redux/slices/filtersSlice'
import { categories, sortList } from '../data/data'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL
interface AppContextInterface {
  debouncedSearchValue: string
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { selectedSort, searchValue, activeCategory } = useSelector((state: RootState) => state.filters)

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const isUrlFilters = useRef(false)
  const isMounted = useRef(false)

  const currentPage = useSelector((state: RootState) => state.filters.currentPage)

  const debouncedSearchValue = useDebounce(searchValue, 700)

  const loadPizzas = () => {
    dispatch(
      fetchPizzas({
        url: pizzasUrl,
        params: getPizzasParams(activeCategory.index, selectedSort, debouncedSearchValue, currentPage),
      })
    )
  }

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
      loadPizzas()
    }
    isUrlFilters.current = false

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [debouncedSearchValue, activeCategory, selectedSort, currentPage])

  return (
    <AppContext.Provider
      value={{
        debouncedSearchValue,
      }}>
      {children}
    </AppContext.Provider>
  )
}
