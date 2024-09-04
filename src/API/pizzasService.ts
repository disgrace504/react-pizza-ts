import axios from 'axios'

export const getPizzas = async (url: string, options: string) => {
  const response = await axios.get(url + options)

  return response
}
