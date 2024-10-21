import { Pizza } from './Pizza/Pizza'
import { PizzaSkeleton } from './Pizza/PizzaSkeleton'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const PizzasList = () => {
  const status = useSelector((state: RootState) => state.pizzas.status)
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzas)

  const skeletons = [...new Array(12)].map((_, index) => <PizzaSkeleton key={index} />)
  const pizzasItems = pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)

  return (
    <div className='content__items'>
      {status === 'loading' ? (
        skeletons
      ) : status === 'error' ? (
        <h2>
          Ошибка загрузки пицц. <p>Попробуйте еще раз.</p>
        </h2>
      ) : pizzas.length === 0 ? (
        <h2>Таких пицц нет</h2>
      ) : (
        pizzasItems
      )}
    </div>
  )
}
