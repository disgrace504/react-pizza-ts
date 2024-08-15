import axios from 'axios'

export const getPizzas = async (url: string) => {
  const response = await axios.get(url)

  return response
}
