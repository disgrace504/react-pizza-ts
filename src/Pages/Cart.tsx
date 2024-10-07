import { Link } from 'react-router-dom'
import { CartItem } from '../components/CartItem'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/slices/cartSlice'
import { EmptyCart } from '../components/EmptyCart'

export const Cart = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  const totalPizzas = useSelector((state: RootState) => state.cart.totalPizzas) // Получаем из Redux
  const cartPizzas = useSelector((state: RootState) => state.cart.cartPizzas)
  const cartPizzasItems = cartPizzas.map((pizza) => <CartItem key={pizza.id} {...pizza} />)

  const dispatch = useDispatch()

  return cartPizzas.length > 0 ? (
    <div className='container'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='content__title'>
            <img src='../../public/img/cart.svg' alt='' /> Корзина
          </h2>
          <div onClick={() => dispatch(clearCart())} className='cart__clear'>
            <img src='../../public/img/trash.svg' alt='' />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className='content__items'>{cartPizzasItems}</div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              Всего пицц: <b>{totalPizzas} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link to='/' className='button button--outline button--add go-back-btn'>
              <img src='../../public/img/grey-arrow-left.svg' alt='' />
              <span>Вернуться назад</span>
            </Link>
            <div className='button pay-btn'>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  )
}
