import { useContext, useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasService'
import { IPizzaProps, Pizza } from './Pizza/Pizza'
import { PizzaSkeleton } from './Pizza/PizzaSkeleton'
import { AppContext } from '../Providers/AppProvider'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL

export const PizzasList = () => {
  const { activeCategory, selectedSort } = useContext(AppContext)!

  const [pizzas, setPizzas] = useState<IPizzaProps[]>([])

  const params = {
    category: activeCategory > 0 ? activeCategory : undefined,
    sortBy: selectedSort.sortProperty.replace('-', ''),
    order: selectedSort.sortProperty.includes('-') ? 'asc' : 'desc',
  }

  const [fetchPizzas, isPizzasLoading] = useFetching(async () => {
    const response = await getPizzas(pizzasUrl, params)
    setPizzas(response.data)
  })

  useEffect(() => {
    fetchPizzas()
  }, [activeCategory, selectedSort])

  return (
    <div className='content__items'>
      {isPizzasLoading
        ? [...new Array(12)].map((_, index) => <PizzaSkeleton key={index} />)
        : pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
    </div>
  )
}
