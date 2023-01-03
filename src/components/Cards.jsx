import { Container, Card, Row, Col } from 'react-bootstrap'
import { Laptop, People, PersonSquare } from 'react-bootstrap-icons'

const Cards = () => (
  <Container className="p-5">
    <Row className="text-center g-4">
      <Col className="col-md">
        <Card>
          <Card.Body className="bg-dark text-light text-center p-3">
            <div className="h1 mb-3">
              <Laptop />
            </div>
            <Card.Title className="mb-3">Virtual</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              esse consectetur nulla modi in aperiam.
            </Card.Text>
            <a href="/" className="btn btn-primary">
              Read More
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-md">
        <Card>
          <Card.Body className="bg-secondary text-light text-center p-3">
            <div className="h1 mb-3">
              <PersonSquare />
            </div>
            <Card.Title className="mb-3">Hybrid</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              esse consectetur nulla modi in aperiam.
            </Card.Text>
            <a href="/" className="btn btn-dark">
              Read More
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-md">
        <Card>
          <Card.Body className="bg-dark text-light text-center p-3">
            <div className="h1 mb-3">
              <People />
            </div>
            <Card.Title className="mb-3">In Person</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              esse consectetur nulla modi in aperiam.
            </Card.Text>
            <a href="/" className="btn btn-primary">
              Read More
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default Cards
