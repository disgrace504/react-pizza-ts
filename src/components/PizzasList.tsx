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

  const sortBy = selectedSort.sortProperty.replace('-', '')
  const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc'
  const filterCategory = activeCategory > 0 ? `category=${activeCategory}` : ''
  const options = `?${filterCategory}` + `&sortBy=${sortBy}&order=${order}`

  const [fetchPizzas, isPizzasLoading] = useFetching(async () => {
    const response = await getPizzas(pizzasUrl, options)
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
