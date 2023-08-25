import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import photo from './img.jpg';
import arr from './Joueur';
import PropTypes from 'prop-types';


function Carde({x}) {
  const myStyle={color: 'blue',
  fontFamily: 'Arial, sans-serif',
    backgroundColor: 'red',
};
  return (
    <div style={myStyle}>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={x.img} />
    <Card.Body>
      <Card.Title> {x.name}</Card.Title>
      <Card.Text>
        {x.equipe}
      </Card.Text>
      <Card.Text>
        {x.num}
         </Card.Text>
      <Card.Text>
      {x.natio}
    </Card.Text>
    <Card.Text>
      {x.age}
    </Card.Text>
      
    </Card.Body>
  </Card>
  </div>
  )
}
Carde.propTypes = {
  name: PropTypes.string,
 }
  Carde.defaultProps = {
   name:"name"
 };

export default Carde