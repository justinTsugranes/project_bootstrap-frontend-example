import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar
      className='py-3 text-light'
      bg='dark'
      variant='dark'
      fixed='top'
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='/' rel='noreferrer'>
          Frontend Bootcamp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-end text-end pt-3'
        >
          <Nav>
            <Nav.Link href='#learn'>What You'll Learn</Nav.Link>
            <Nav.Link href='#questions'>Questions</Nav.Link>
            <Nav.Link href='#instructors'>Instructors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
