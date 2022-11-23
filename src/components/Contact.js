import React, { useRef, useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoianVzdGludHN1Z3JhbmVzIiwiYSI6ImNsYTVsd2lqMzFjNjIzcG1oNmI5MzB6OTYifQ.FJH3rLc4Y9p-epKCpeIJxA'

const Contact = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-118.37163543701172)
  const [lat, setLat] = useState(34.11001968383789)
  const [zoom, setZoom] = useState(18)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  return (
    <Container className='p-5'>
      <Row className='row g-4'>
        <Col className='col-md'>
          <h2 className='text-center mb-4'>Contact Info</h2>
          <ListGroup className='list-group-flush lead'>
            <ListGroupItem>
              <span className='fw-bold'>Main Location:</span> 2400 Laurel Canyon
              Blvd, Los Angeles, CA
            </ListGroupItem>
            <ListGroupItem>
              <span className='fw-bold'>Enrollment Phone:</span> (555) 555-5555
            </ListGroupItem>
            <ListGroupItem>
              <span className='fw-bold'>Student Phone:</span> (333) 333-3333
            </ListGroupItem>
            <ListGroupItem>
              <span className='fw-bold'>Enrollment Email:</span> (555)
              enroll@frontend.example
            </ListGroupItem>
            <ListGroupItem>
              <span className='fw-bold'>Student Email:</span>
              student@frontend.example
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col className='col-md'>
          <div ref={mapContainer} className='map-container' />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
