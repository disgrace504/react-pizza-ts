import { useDispatch, useSelector } from 'react-redux'
import { titleType } from '../data/data'
import { RootState } from '../redux/store'
import { IPizza } from '../types/pizza.types'
import { addCartPizza, removeCartPizza, removePizzas } from '../redux/slices/cartSlice'

export const CartItem = ({ id, title, price, sizes, imageUrl, type }: IPizza) => {
  const dispatch = useDispatch()
  const { count } = useSelector((state: RootState) => state.cart.cartPizzas.find((obj) => obj.id === id)) || {
    count: 0,
  }
  const pizza = { id, title, price, sizes, imageUrl, type, count: count }

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {titleType[type]}, {sizes} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          onClick={() => dispatch(removeCartPizza(pizza))}
          className='button button--outline button--circle cart__item-count-minus'>
          <img src='../../../public/img/minus.svg' alt='' />
        </div>
        <b>{count}</b>
        <div
          onClick={() => dispatch(addCartPizza(pizza))}
          className='button button--outline button--circle cart__item-count-plus'>
          <img src='../../../public/img/plus.svg' alt='' />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{price * count} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <div onClick={() => dispatch(removePizzas(pizza))} className='button button--outline button--circle'>
          <img src='../../../public/img/remove.svg' alt='' />
        </div>
      </div>
    </div>
  )
}
