import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carde2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://speedgatemotors.com/cdn/shop/products/WhatsAppImage2022-05-13at3.46.05PM_1400x.jpg?v=1653128503" />
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

export default Carde2