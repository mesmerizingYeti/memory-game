import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol } from 'mdbreact'

const FlippingCardFront = props => {
  return (
    <MDBCol>
      <MDBCard style={{ backgroundColor: 'blue', color: 'white' }}>
        <MDBCardBody>
          <p>This is the front of {props.value} card.</p>
          <MDBBtn value={props.value} onClick={props.handleCardClick}>Flip</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default FlippingCardFront