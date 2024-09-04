//TODO: перевести на redux

import { createContext, useState, ReactNode } from 'react'

interface AppContextInterface {
  activeCategory: number
  selectedSort: { id: number; title: string; sortProperty: string }
  setActiveCategory: (category: number) => void
  setSelectedSort: (sort: { id: number; title: string; sortProperty: string }) => void
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [selectedSort, setSelectedSort] = useState<{ id: number; title: string; sortProperty: string }>({
    id: 0,
    title: 'популярности',
    sortProperty: 'rating',
  })

  return (
    <AppContext.Provider value={{ activeCategory, selectedSort, setActiveCategory, setSelectedSort }}>
      {children}
    </AppContext.Provider>
  )
}
