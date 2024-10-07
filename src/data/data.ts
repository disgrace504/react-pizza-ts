export const categories = [
  { title: 'Все', index: 0 },
  { title: 'Мясные', index: 1 },
  { title: 'Вегетарианская', index: 2 },
  { title: 'Гриль', index: 3 },
  { title: 'Острые', index: 4 },
  { title: 'Закрытые', index: 5 },
]

export const sortList = [
  { id: 0, title: 'популярности(DESC)', sortProperty: 'rating' },
  { id: 1, title: 'популярности(ASC)', sortProperty: '-rating' },
  { id: 2, title: 'цене(DESC)', sortProperty: 'price' },
  { id: 3, title: 'цене(ASC)', sortProperty: '-price' },
  { id: 4, title: 'алфавиту(DESC)', sortProperty: 'title' },
  { id: 5, title: 'алфавиту(ASC)', sortProperty: '-title' },
]

export const titleType = ['тонкое', 'традиционное']
