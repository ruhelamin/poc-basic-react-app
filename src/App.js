import React from 'react';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';

function App() {
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
