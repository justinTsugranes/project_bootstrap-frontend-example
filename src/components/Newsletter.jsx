import { Container, InputGroup, Form, Button } from 'react-bootstrap'

const Newsletter = () => (
  <Container fluid className="bg-primary text-light p-5">
    <Container className="px-5">
      <div className="d-md-flex justify-content-between align-items-center">
        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
        <InputGroup className="input-group news-input">
          <Form.Control
            placeholder="Enter Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            required
          />
          <Button className="btn-dark btn-lg" type="submit" id="button-addon2">
            Sign Up
          </Button>
        </InputGroup>
      </div>
    </Container>
  </Container>
)

export default Newsletter
