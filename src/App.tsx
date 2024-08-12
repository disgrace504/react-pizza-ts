import './assets/app.scss'
import { Categories } from './components/Categories'
import { Header } from './components/Header'
import { Pizza } from './components/Pizza'
import { Sort } from './components/Sort'

export const App = () => {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
              <Pizza title='Чизбургер-пицца' price={395} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
