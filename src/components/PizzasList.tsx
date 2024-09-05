import { useContext, useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasService'
import { IPizzaProps, Pizza } from './Pizza/Pizza'
import { PizzaSkeleton } from './Pizza/PizzaSkeleton'
import { AppContext } from '../Providers/AppProvider'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL

export const PizzasList = () => {
  const { activeCategory, selectedSort, debouncedSearchValue } = useContext(AppContext)!

  const [pizzas, setPizzas] = useState<IPizzaProps[]>([])

  const params = {
    category: activeCategory > 0 ? activeCategory : undefined,
    sortBy: selectedSort.sortProperty.replace('-', ''),
    order: selectedSort.sortProperty.includes('-') ? 'asc' : 'desc',
    search: debouncedSearchValue || undefined,
  }

  const [fetchPizzas, isPizzasLoading, pizzaError, setPizzaError] = useFetching(async () => {
    const response = await getPizzas(pizzasUrl, params)
    setPizzas(response.data)
  })

  const skeletons = [...new Array(12)].map((_, index) => <PizzaSkeleton key={index} />)
  const pizzasItems = pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)

  useEffect(() => {
    fetchPizzas()
    if (debouncedSearchValue) {
      setPizzaError('')
    }
  }, [debouncedSearchValue, activeCategory, selectedSort])

  return (
    <div className='content__items'>
      {isPizzasLoading ? (
        skeletons
      ) : pizzaError ? (
        <h2>Таких пицц нет, сам готовь.</h2>
      ) : pizzas.length === 0 ? (
        <h2>Таких пицц нет</h2>
      ) : (
        pizzasItems
      )}
    </div>
  )
}
