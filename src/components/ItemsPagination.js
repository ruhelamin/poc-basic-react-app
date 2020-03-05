import React from "react";
import { Pagination } from 'react-bootstrap';

const ItemsPagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {

  let active = currentPage;
  let pageNumbers = [];
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  let adjustPagination = (currentPage > 5  || currentPage < totalPages - 5) && totalPages > 10;

  let startPage = adjustPagination ? currentPage - 5 : 1;
  let endPage = adjustPagination ? currentPage + 5 : 10;
  let prevPage = currentPage > 1 ? currentPage - 1 : 1;
  let nextPage = totalPages < currentPage ? currentPage + 1 : totalPages;
  
  pageNumbers.push(
    <Pagination.Prev key='prev' disabled={currentPage === 1} onClick={() => paginate(prevPage)} />
  );

  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
    pageNumbers.push(
      <Pagination.Item key={pageNumber} active={pageNumber === active} onClick={() => paginate(pageNumber)}>
        {pageNumber}
      </Pagination.Item>
    );
  }
  
  pageNumbers.push(
    <Pagination.Next key='next' disabled={currentPage === totalPages} onClick={() => paginate(nextPage)} />
  );

  return (

    <Pagination size="lg" className="mt-3">
      {pageNumbers}
    </Pagination>

  );

};

export default ItemsPagination;
