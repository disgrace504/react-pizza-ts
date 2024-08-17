import { PizzasList } from '../components/PizzasList'
import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'

export const Main = () => {
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <PizzasList />
    </>
  )
}
