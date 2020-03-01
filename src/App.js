import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await axios.post('http://nyx.vima.ekt.gr:3000/api/books');
      console.log("response", response);
      setItems(response.data);
      setLoading(false);
    }

    fetchItems();
  }, []);

  console.log("items", items);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Books</h1>
          </Col>
        </Row>
        <Row>
          <Col>

            <ListGroup>

              <ListGroup.Item variant="primary" className="mt-3">
                <h4>Ο Αλέξανδρος ο Μακεδών</h4>
                <p>Author: Ανώνυμος</p>
                <p><Badge pill variant="light">ID: 2086</Badge> <Badge pill variant="light">Published on: 1529</Badge> <Badge pill variant="light">Published in: Βενετία, Ιταλία</Badge> <Badge pill variant="light">Pages: 104</Badge></p>
              </ListGroup.Item>

              <ListGroup.Item variant="primary" className="mt-3">
                <h4>Ο Αλέξανδρος ο Μακεδών</h4>
                <p>Author: Ανώνυμος</p>
                <p><Badge pill variant="light">ID: 2086</Badge> <Badge pill variant="light">Published on: 1529</Badge> <Badge pill variant="light">Published in: Βενετία, Ιταλία</Badge> <Badge pill variant="light">Pages: 104</Badge></p>
              </ListGroup.Item>

            </ListGroup>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
