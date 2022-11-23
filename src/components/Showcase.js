import React, { useState } from 'react'
import { Container, Button, Modal, Form } from 'react-bootstrap'

export default function Showcase() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container fluid className='p-0'>
      <section className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
        <Container>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                Become a <span className='text-warning'> Web Developer</span>
              </h1>
              <p className='lead my-4'>
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <Button className='btn-lg' variant='primary' onClick={handleShow}>
                Start The Enrollment
              </Button>
            </div>
            <img
              className='img-fluid w-50 d-none d-sm-block'
              src='img/showcase.svg'
              alt=''
            />
          </div>
        </Container>
      </section>

      {/* <!-- Modal --> */}
      <Modal aria-labelledby='enrollLabel' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title fs-5' id='exampleModalLabel'>
            Enroll Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Modal.Text className='lead'>
            Fill out this form and we will get back to you
          </Modal.Text>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type='text' placeholder='Full Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPhone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='number' placeholder='Phone Number' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
