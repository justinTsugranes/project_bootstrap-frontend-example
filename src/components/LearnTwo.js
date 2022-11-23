import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function LearnTwo() {
  return (
    <div>
      <section id='learn' className='p-5 bg-dark text-light'>
        <Container id='learn' className='p-5 bg-dark text-light'>
          <Row className='align-items-center justify-content-between'>
            <Col className='col-md p-5'>
              <h2>Learn React</h2>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                expedita ducimus laudantium eveniet sint magni!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis cumque officia corporis recusandae delectus aperiam
                similique pariatur aspernatur ea, quas illo ducimus inventore
                debitis sunt, quos dolor molestiae qui! Reprehenderit.
              </p>
              {/* <a href='' className='btn btn-light mt-3'>
                <i className='bi bi-chevron right'></i> Read More
              </a> */}
            </Col>
            <Col className='col-md'>
              <img src='img/react.svg' className='img-fluid' alt='' />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
