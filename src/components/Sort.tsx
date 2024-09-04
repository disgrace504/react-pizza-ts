import { useContext, useState } from 'react'
import { AppContext } from '../Providers/AppProvider'

export const Sort = () => {
  const [sortListIsVisible, setSortListIsVisible] = useState(false)
  const { selectedSort, setSelectedSort } = useContext(AppContext)!

  const sortList = [
    { id: 0, title: 'популярности(DESC)', sortProperty: 'rating' },
    { id: 1, title: 'популярности(ASC)', sortProperty: '-rating' },
    { id: 2, title: 'цене(DESC)', sortProperty: 'price' },
    { id: 3, title: 'цене(ASC)', sortProperty: '-price' },
    { id: 4, title: 'алфавиту(DESC)', sortProperty: 'title' },
    { id: 5, title: 'алфавиту(ASC)', sortProperty: '-title' },
  ]
  const sortTitle = selectedSort.title

  const onSortBy = (sort: { id: number; title: string; sortProperty: string }) => {
    setSelectedSort(sort)
    setSortListIsVisible(false)
  }

  return (
    <div className='sort'>
      <div className='sort__label'>
        <svg
          className={sortListIsVisible === true ? 'active' : ''}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setSortListIsVisible(!sortListIsVisible)}>{sortTitle}</span>
      </div>
      {sortListIsVisible && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((sortBy) => (
              <li
                key={sortBy.id}
                className={selectedSort.id === sortBy.id ? 'active' : ''}
                onClick={() => onSortBy(sortBy)}>
                {sortBy.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
