import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

const pizzasUrl = import.meta.env.VITE_PIZZAS_URL
import { IPizza } from './../types/pizza.types'

export const PizzaDescription = () => {
  const [pizza, setPizza] = useState<IPizza>()
  const navigate = useNavigate()
  const paramsUrl = useParams()

  useEffect(() => {
    const getPizzaById = async () => {
      try {
        const response = await axios.get(pizzasUrl + '/' + paramsUrl.id)
        setPizza(response.data)
      } catch (error) {
        alert(`Ошибка получения пиццы : ${error}`)
        navigate('/')
      }
    }

    getPizzaById()
  }, [])

  return !pizza ? (
    <div>Загрузка</div>
  ) : (
    <div className='container'>
      <img src={pizza.imageUrl} alt='img' />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} руб.</h4>
    </div>
  )
}
