import { useState } from 'react'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1)
  const categories = [
    {
      title: 'Все',
      index: 0,
    },
    {
      title: 'Мясные',
      index: 1,
    },
    {
      title: 'Вегетарианская',
      index: 2,
    },
    {
      title: 'Гриль',
      index: 3,
    },
    {
      title: 'Острые',
      index: 4,
    },
    {
      title: 'Закрытые',
      index: 5,
    },
  ]

  return (
    <div className='categories'>
      <ul>
        {categories.map((category) => (
          <li
            key={category.index}
            onClick={() => setActiveCategory(category.index)}
            className={activeCategory === category.index ? 'active' : ''}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
