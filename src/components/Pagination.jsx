import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/actions/pagination';

const Pagination = ({ inHome }) => {

  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.currentPage);
  const setTotalPage = [1,2,3,4,5,6,7,8,9];

  function handlerPagination(event, data) {
    event.preventDefault();
    dispatch(setPage(data + 1));
  }

  function handlerPaginationPrevious(event) {
    event.preventDefault();
    if(currentPage > 0) {
      const prevPage = currentPage - 1;
      dispatch(setPage(prevPage));
    }
  }

  function handlerPaginationNext(event) {
    event.preventDefault();
    if(currentPage < 9) {
      const nextPage = currentPage + 1;
      dispatch(setPage(nextPage));
    }
  }

  return(
    <nav hidden={!inHome} aria-label="Page navigation example">
      <ul className="pagination ">
        <li className="page-item"><a className="page-link" onClick={(event) => handlerPaginationPrevious(event)}>Previous</a></li>
          {setTotalPage.map((data, idx) => (
            <li key={idx} className="page-item"><a className="page-link" onClick={(event) => handlerPagination(event, data-1)}>{data}</a></li>
          ))}       
        <li className="page-item"><a className="page-link" onClick={(event) => handlerPaginationNext(event)}>Next</a></li>
      </ul>
    </nav>
  )
}

export default Pagination;














