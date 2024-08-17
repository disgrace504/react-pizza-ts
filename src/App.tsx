import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Main } from './Pages/Main'
import './assets/app.scss'
import { NotFound } from './Pages/NotFound'
import { Cart } from './Pages/Cart'

export const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
