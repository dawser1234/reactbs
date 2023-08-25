import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arr from './Joueur';

function Carde3() {
  var name="x"
  var firstname="aa"
  return (
    <Card style={{ width: '18rem' }}>
    {firstname ? <Card.Img variant="top" src={arr[2].img} /> :null}
       <Card.Body>
        <Card.Title>{name?"hello":"hello there"}{arr[2].name}</Card.Title>
        <Card.Text>
        {arr[2].price}
        </Card.Text>
        <Card.Text>
        {arr[2].description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Carde3