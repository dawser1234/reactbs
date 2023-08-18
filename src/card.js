import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from './img.jpg';

function Carde() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={photo} />
    <Card.Body>
      <Card.Title> G class brabus</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Carde