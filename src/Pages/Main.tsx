import { PizzasList } from '../components/PizzasList'
import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination/Pagination'

export const Main = () => {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <PizzasList />
      <Pagination />
    </div>
  )
}
