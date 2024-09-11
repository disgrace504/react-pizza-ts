import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setActiveCategory } from '../redux/slices/filtersSlice'
import { categories } from '../data/data'

export const Categories = () => {
  const activeCategory = useSelector((state: RootState) => state.filters.activeCategory.index)
  const dispatch = useDispatch()

  const onChangeCategory = (index: number) => {
    dispatch(setActiveCategory({ index }))
  }

  return (
    <div className='categories'>
      <ul>
        {categories.map((category) => (
          <li
            key={category.index}
            onClick={() => onChangeCategory(category.index)}
            className={activeCategory === category.index ? 'active' : ''}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
