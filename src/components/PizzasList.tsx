import { useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasServise'
import { IPizzaProps, Pizza } from './Pizza/Pizza'
import { PizzaSkeleton } from './Pizza/PizzaSkeleton'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL

export const PizzasList = () => {
  const [pizzas, setPizzas] = useState<IPizzaProps[]>([])

  const [fetchPizzas, isPizzasLoading] = useFetching(async () => {
    const response = await getPizzas(pizzasUrl)
    setPizzas(response.data)
  })

  useEffect(() => {
    fetchPizzas()
  }, [])

  return (
    <div className='content__items'>
      {isPizzasLoading
        ? [...new Array(12)].map((_, index) => <PizzaSkeleton key={index} />)
        : pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
    </div>
  )
}
