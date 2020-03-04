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
    <Pagination.Prev key='prev' disabled={currentPage === 1 } onClick={() => paginate(prevPage)} />
  );

  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
    pageNumbers.push(
      <Pagination.Item key={pageNumber} active={pageNumber === active} onClick={() => paginate(pageNumber)}>
        {pageNumber}
      </Pagination.Item>
    );
  }
  
  pageNumbers.push(
    <Pagination.Next key='next' disabled={currentPage === totalPages } onClick={() => paginate(nextPage)} />
  );

  return (

    <Pagination size="lg" className="mt-3">
      {pageNumbers}
    </Pagination>

    // TODO: bootstrap pagination component for large number of pages
    // <Pagination>
    //   <Pagination.First />
    //   <Pagination.Prev />
    //   <Pagination.Item>{1}</Pagination.Item>
    //   <Pagination.Ellipsis />

    //   <Pagination.Item>{10}</Pagination.Item>
    //   <Pagination.Item>{11}</Pagination.Item>
    //   <Pagination.Item active>{12}</Pagination.Item>
    //   <Pagination.Item>{13}</Pagination.Item>
    //   <Pagination.Item disabled>{14}</Pagination.Item>

    //   <Pagination.Ellipsis />
    //   <Pagination.Item>{20}</Pagination.Item>
    //   <Pagination.Next />
    //   <Pagination.Last />
    // </Pagination>

  );

};

export default ItemsPagination;
