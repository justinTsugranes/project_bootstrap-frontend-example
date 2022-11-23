import React from 'react'
import {
  ArrowUpCircle,
  Facebook,
  Github,
  Google,
  Instagram,
  Linkedin,
  Twitter,
} from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark text-center text-white position-relative'>
      {/* <!-- Grid container --> */}
      <Container className='container p-4 pb-0'>
        {/* <!-- Section: Social media --> */}
        <section className='mb-4'>
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            rel='noreferrer'
            role='button'
          >
            <Facebook />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            rel='noreferrer'
            role='button'
          >
            <Twitter />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            rel='noreferrer'
            role='button'
          >
            <Google />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            rel='noreferrer'
            role='button'
          >
            <Instagram />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            rel='noreferrer'
            role='button'
          >
            <Linkedin />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            rel='noreferrer'
            role='button'
          >
            <Github />
          </a>
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Copyright --> */}
        <div className='text-center p-3'>
          <p className='lead'>© 2022 Copyright: misfitDodo Media</p>
          <a href='/' className='position-absolute bottom-0 end-0 p-5 h1'>
            <ArrowUpCircle />
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </Container>
      {/* <!-- Grid container --> */}
    </footer>
  )
}

export default Footer
