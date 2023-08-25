import React from 'react'
import Carde from './Player' 
import arr from './Joueur'

function PlayerList() {
  return (
    <div className='cart2'>
    {arr.map((el)=>  
        <Carde x={el}  /> )}
             
    </div>
  )
}

export default PlayerList