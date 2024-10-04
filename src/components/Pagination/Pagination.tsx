import ReactPaginate from 'react-paginate'
import cls from './Pagination.module.scss'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filtersSlice'

export const Pagination = () => {
  const dispatch = useDispatch()

  return (
    <>
      <ReactPaginate
        className={cls.pagination}
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={(event) => dispatch(setCurrentPage(event.selected))}
        pageRangeDisplayed={2}
        // Мокапи не может возвращать кол-во страниц, поэтому захардкодил
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  )
}
