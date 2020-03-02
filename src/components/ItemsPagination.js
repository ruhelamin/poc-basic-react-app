import React from "react";
import { Pagination } from 'react-bootstrap';

const ItemsPagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {

  let active = currentPage;
  let pageNumbers = [];
  for (let pageNumber = 1; pageNumber <= Math.ceil(totalItems / itemsPerPage); pageNumber++) {
    pageNumbers.push(
      <Pagination.Item key={pageNumber} active={pageNumber === active} onClick={() => paginate(pageNumber)}>
        {pageNumber}
      </Pagination.Item>,
    );
  }

  return (

    <Pagination size="sm" className="mt-3">{pageNumbers}</Pagination>

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
