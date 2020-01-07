import React from 'react'
import ReactCardFlip from 'react-card-flip'
import FlippingCardFront from '../FlippingCardFront'
import FlippingCardBack from '../FlippingCardBack'

const FlippingCard = props => {
  return (
    <ReactCardFlip
      isFlipped={props.flipped}
      flipDirection="vertical"
      containerStyle={{ margin: "10px" }}
    >
      <FlippingCardFront value={props.value} handleCardClick={props.handleCardClick} />  
      <FlippingCardBack value={props.value} handleCardClick={props.handleCardClick} />        
    </ReactCardFlip>
  )
}

export default FlippingCard