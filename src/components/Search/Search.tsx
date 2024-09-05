import { useContext } from 'react'
import cls from './Search.module.scss'
import { AppContext } from '../../Providers/AppProvider'

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext)!
  return (
    <div className={cls.search}>
      <svg
        height='512px'
        id='Layer_1'
        className={cls.searchIcon}
        version='1.1'
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z' />
      </svg>
      <input
        className={cls.searchInput}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type='text'
        placeholder='Найти питсу...'
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={cls.clearIcon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'>
          <path
            d='M6.00015 4.58569L12.0002 10.5857L18.0002 4.58569L19.4144 5.99991L13.4144 11.9999L19.4144 17.9999L18.0002 19.4141L12.0002 13.4141L6.00015 19.4141L4.58594 17.9999L10.5859 11.9999L4.58594 5.99991L6.00015 4.58569Z'
            fill='black'
          />
        </svg>
      )}
    </div>
  )
}
