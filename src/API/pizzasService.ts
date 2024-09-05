import axios from 'axios'

export const getPizzas = async (url: string, params: any) => {
  const response = await axios.get(url, {
    params: {
      ...params,
    },
  })
  return response
}
