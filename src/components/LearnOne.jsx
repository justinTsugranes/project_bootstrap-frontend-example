import { Container, Row, Col } from 'react-bootstrap'
import { FundamentalsImg } from '../assets'

const Learn = () => (
  <Container id="learn" className="p-5">
    <Row class="row align-items-center justify-content-between">
      <Col class="col-md">
        <img src={FundamentalsImg} class="img-fluid" alt="" />
      </Col>
      <Col class="col-md p-5">
        <h2>Learn The Fundamentals</h2>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita
          ducimus laudantium eveniet sint magni!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          cumque officia corporis recusandae delectus aperiam similique pariatur
          aspernatur ea, quas illo ducimus inventore debitis sunt, quos dolor
          molestiae qui! Reprehenderit.
        </p>
        <a href="!#" class="btn btn-secondary mt-3">
          <i class="bi bi-chevron right"></i> Read More
        </a>
      </Col>
    </Row>
  </Container>
)

export default Learn
