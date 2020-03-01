import React, { useState, useEffect } from "react";
import Items from "./components/Items";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await axios.post('http://nyx.vima.ekt.gr:3000/api/books');
      // console.log("response", response);
      setItems(response.data.books);
      setLoading(false);
    }

    fetchItems();
  }, []);

  // console.log("items", items);

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
            <Items items={items} isLoading={isLoading} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
