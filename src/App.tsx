import './assets/app.scss'
import { Categories } from './components/Categories'
import { Header } from './components/Header'
import { PizzasList } from './components/PizzasList'
import { Sort } from './components/Sort'

export const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <PizzasList />
        </div>
      </div>
    </div>
  )
}
