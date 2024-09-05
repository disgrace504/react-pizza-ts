//TODO: перевести на redux

import { createContext, useState, ReactNode } from 'react'
import { useDebounce } from '../hooks/useDebounce'

interface AppContextInterface {
  activeCategory: number
  selectedSort: { id: number; title: string; sortProperty: string }
  searchValue: string
  setActiveCategory: (activeCategory: number) => void
  setSelectedSort: (sort: { id: number; title: string; sortProperty: string }) => void
  setSearchValue: (searchValue: string) => void
  debouncedSearchValue: string
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [selectedSort, setSelectedSort] = useState<{ id: number; title: string; sortProperty: string }>({
    id: 0,
    title: 'популярности',
    sortProperty: 'rating',
  })
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedSearchValue = useDebounce(searchValue, 700)

  return (
    <AppContext.Provider
      value={{
        debouncedSearchValue,
        activeCategory,
        selectedSort,
        searchValue,
        setActiveCategory,
        setSelectedSort,
        setSearchValue,
      }}>
      {children}
    </AppContext.Provider>
  )
}
