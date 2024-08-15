import { useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import { getPizzas } from '../API/pizzasServise'
import { IPizzaProps, Pizza } from './Pizza'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL

export const PizzasList = () => {
  const [pizzas, setPizzas] = useState<IPizzaProps[]>([])

  const [fetchPizzas] = useFetching(async () => {
    const response = await getPizzas(pizzasUrl)
    setPizzas(response.data)
  })

  useEffect(() => {
    fetchPizzas()
  }, [])

  return (
    <div className='content__items'>
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} />
      ))}
    </div>
  )
}
