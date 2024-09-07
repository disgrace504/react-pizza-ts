import ReactPaginate from 'react-paginate'
import cls from './Pagination.module.scss'
import { useContext } from 'react'
import { AppContext } from '../../Providers/AppProvider'

export const Pagination = () => {
  const { setCurrentPage } = useContext(AppContext)!

  return (
    <>
      <ReactPaginate
        className={cls.pagination}
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={2}
        // Мокапи не может возвращать кол-во страниц, поэтому захардкодил
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  )
}
