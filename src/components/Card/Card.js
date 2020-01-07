import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol } from 'mdbreact'
import ReactCardFlip from 'react-card-flip'

const Card = props => {
  return (
    <ReactCardFlip
      isFlipped={card.flipped}
      flipDirection="vertical"
      containerStyle={{ margin: "10px" }}
      key={index}
    >
      <MDBCol>
        <MDBCard style={{ backgroundColor: 'blue', color: 'white' }}>
          <MDBCardBody>
            <p>This is the front of {card.value} card.</p>
            <MDBBtn value={card.value} onClick={this.handleCardClick}>Flip</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ backgroundColor: 'red', color: 'white' }}>
          <MDBCardBody>
            <p>This is the back of {card.value} card.</p>
            <MDBBtn value={card.value} onClick={this.handleCardClick}>Flip</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </ReactCardFlip>
  )
}

export default Card