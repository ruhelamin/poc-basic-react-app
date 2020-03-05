import React from "react";
import { ListGroup, Badge } from 'react-bootstrap';

const Items = ({ items, isLoading }) => {

  if (isLoading) {
    return <p>Loading items...</p>;
  }

  return (
    <ListGroup>
      {items.map(item => (
        <ListGroup.Item variant="primary" className="mt-3" key={item.id}>
          <h4>{item.book_title}</h4>
          <p>Author: {item.book_author}</p>
          <p><Badge pill variant="light">ID: {item.id}</Badge> <Badge pill variant="light">Published on: {item.book_publication_year}</Badge> <Badge pill variant="light">Published in: {item.book_publication_city}, {item.book_publication_country}</Badge> <Badge pill variant="light">Pages: {item.book_pages}</Badge></p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

};

export default Items;
