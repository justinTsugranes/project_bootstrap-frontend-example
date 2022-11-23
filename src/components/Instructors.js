import React from 'react'
import { Container, Card, Col, Row, ButtonGroup } from 'react-bootstrap'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons'

export default function Instructors() {
  return (
    <section id='instructors' class='p-5 bg-primary'>
      <Container>
        <h2 class='text-center text-white'>Our Instructors</h2>
        <p class='lead text-center text-white mb-5'>
          Our instructors all have over 5 years as web developers working in the
          industry
        </p>
        <Row class='g-4'>
          {/* <!-- Card 1 --> */}
          <Col class='col-md-6 col-lg-3'>
            <Card class='bg-light p-3'>
              <Card.Body class='text-center p-3'>
                <img
                  src='https://randomuser.me/api/portraits/men/11.jpg'
                  class='rounded-circle mb-3'
                  alt=''
                />
                <Card.Title class='mb-3'>John Doe</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium modi maxime quaerat nobis enim optio.
                </Card.Text>
                <ButtonGroup>
                  <a href='!#'>
                    <Twitter className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Facebook className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Linkedin className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Instagram className='text-dark mx-1' />
                  </a>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- Card 2 --> */}
          <Col class='col-md-6 col-lg-3'>
            <Card class='bg-light p-3'>
              <Card.Body class='text-center p-3'>
                <img
                  src='https://randomuser.me/api/portraits/women/11.jpg'
                  class='rounded-circle mb-3'
                  alt=''
                />
                <Card.Title class='mb-3'>Jane Doe</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium modi maxime quaerat nobis enim optio.
                </Card.Text>
                <ButtonGroup>
                  <a href='!#'>
                    <Twitter className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Facebook className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Linkedin className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Instagram className='text-dark mx-1' />
                  </a>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- Card 3 --> */}
          <Col class='col-md-6 col-lg-3'>
            <Card class='bg-light p-3'>
              <Card.Body class='text-center p-3'>
                <img
                  src='https://randomuser.me/api/portraits/men/33.jpg'
                  class='rounded-circle mb-3'
                  alt=''
                />
                <Card.Title class='mb-3'>Steve Smith</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium modi maxime quaerat nobis enim optio.
                </Card.Text>
                <ButtonGroup>
                  <a href='!#'>
                    <Twitter className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Facebook className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Linkedin className='text-dark mx-1' />
                  </a>
                  <a href='!#'>
                    <Instagram className='text-dark mx-1' />
                  </a>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- Card 4 --> */}
          <Col class='col-md-6 col-lg-3'>
            <Card class='bg-light p-3'>
              <Card.Body class='text-center p-3'>
                <img
                  src='https://randomuser.me/api/portraits/women/12.jpg'
                  class='rounded-circle mb-3'
                  alt=''
                />
                <Card.Title class='mb-3'>Sarah Smith</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium modi maxime quaerat nobis enim optio.
                </Card.Text>
                <ButtonGroup />
                <a href='!#'>
                  <Twitter className='text-dark mx-1' />
                </a>
                <a href='!#'>
                  <Facebook className='text-dark mx-1' />
                </a>
                <a href='!#'>
                  <Linkedin className='text-dark mx-1' />
                </a>
                <a href='!#'>
                  <Instagram className='text-dark mx-1' />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
