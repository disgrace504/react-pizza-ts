import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Main } from './Pages/Main'
import './assets/app.scss'
import { NotFound } from './Pages/NotFound'
import { Cart } from './Pages/Cart'
import { AppProvider } from './Providers/AppProvider'

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
