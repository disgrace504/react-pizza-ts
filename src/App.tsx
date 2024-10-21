import { Route, Routes } from 'react-router-dom'
import { Main } from './Pages/Main'
import './assets/app.scss'
import { NotFound } from './Pages/NotFound'
import { Cart } from './Pages/Cart'

import { PizzaDescription } from './Pages/PizzaDescription'
import { MainLayout } from './layouts/MainLayout'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Main />} />
        <Route path='pizza/:id' element={<PizzaDescription />} />
        <Route path='*' element={<NotFound />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}
