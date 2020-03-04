import React, { useState, useEffect } from "react";
import Items from "./components/Items";
import ItemsPagination from "./components/ItemsPagination";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  let urlSearchParams = new URLSearchParams(window.location.search);
  console.log("urlSearchParams", urlSearchParams);

  let currentPageInURL = urlSearchParams.get('page') ? urlSearchParams.get('page') : urlSearchParams.set('page', 1);
  console.log("currentPageInURL", currentPageInURL);

  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState();
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(!isNaN(currentPageInURL) ? currentPageInURL : 1);
  const [itemsPerPage] = useState(20);

  const pageNumberQueryParam = (pageNumber) => {
    urlSearchParams.set('page', pageNumber);
    let newRelativePathQuery = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.pushState(null, '', newRelativePathQuery);
  };

  const fetchItems = async (currentPage) => {
    setLoading(true);
    const response = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', {
      page: currentPage,
      itemsPerPage: 20,
      // filters: [{type: "all", values: ["Βιβλίον"]}]
    });

    setItems(response.data.books);
    setItemsCount(response.data.count);
    setLoading(false);
  }

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchItems(pageNumber);
    pageNumberQueryParam(pageNumber);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3">Books</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ItemsPagination itemsPerPage={itemsPerPage} totalItems={itemsCount} currentPage={currentPage} paginate={paginate} />
            <Items items={items} isLoading={isLoading} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
