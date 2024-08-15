import pizzas from '../assets/pizzas.json'
import { Pizza } from './Pizza'

export const PizzasList = () => {
  return (
    <div className='content__items'>
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} />
      ))}
    </div>
  )
}
