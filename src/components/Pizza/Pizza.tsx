import { useState } from 'react'
import { IPizza } from '../../types/pizza.types'
import { useDispatch, useSelector } from 'react-redux'
import { addCartPizza } from '../../redux/slices/cartSlice'
import { titleType } from '../../data/data'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'

export const Pizza = ({ id, title, price, sizes, imageUrl, types }: IPizza) => {
  const { count } = useSelector((state: RootState) => state.cart.cartPizzas.find((obj) => obj.id === id)) || {
    count: 0,
  }
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedType, setSelectedType] = useState(0)

  const dispatch = useDispatch()

  const onClickAdd = () => {
    const pizza = { id, title, price, sizes: sizes[selectedSize], imageUrl, type: selectedType }
    dispatch(addCartPizza(pizza))
  }

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <Link to={`/pizza/${id}`}>
          <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
          <h4 className='pizza-block__title'>{title}</h4>{' '}
        </Link>
        <div className='pizza-block__selector'>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setSelectedSize(index)}
                className={selectedSize === index ? 'active' : ''}>{`${size} см.`}</li>
            ))}
          </ul>
          <ul>
            {types.map((type, index) => (
              <li key={index} onClick={() => setSelectedType(index)} className={selectedType === index ? 'active' : ''}>
                {titleType[type]}
              </li>
            ))}
          </ul>
        </div>
        <div onClick={() => onClickAdd()} className='pizza-block__bottom'>
          <div className='pizza-block__price'>{`от ${price} руб.`}</div>
          <div className='button button--outline button--add'>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Добавить</span>
            {count > 0 && <i>{count}</i>}
          </div>
        </div>
      </div>
    </div>
  )
}
