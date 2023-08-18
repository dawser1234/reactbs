import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carde3() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.generation4x4mag.fr/wp-content/uploads/2020/06/0122.jpg" />
      <Card.Body>
        <Card.Title>G class 6*6</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Carde3