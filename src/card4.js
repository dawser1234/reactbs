import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import photo from './img.jpg';
import arr from './product';

function Carde4() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={arr[3].img} />
    <Card.Body>
      <Card.Title> {arr[3].name}</Card.Title>
      <Card.Text>
        {arr[3].price}
      </Card.Text>
      <Card.Text>
        {arr[3].description}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Carde4