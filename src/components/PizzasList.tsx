import { useContext } from 'react'

import { Pizza } from './Pizza/Pizza'
import { PizzaSkeleton } from './Pizza/PizzaSkeleton'
import { AppContext } from '../Providers/AppProvider'

export const PizzasList = () => {
  const { pizzas, pizzaError, isPizzasLoading } = useContext(AppContext)!

  const skeletons = [...new Array(12)].map((_, index) => <PizzaSkeleton key={index} />)
  const pizzasItems = pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)

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
