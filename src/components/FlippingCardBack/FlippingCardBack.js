import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol } from 'mdbreact'

const FlippingCardBack = props => {
  return (
    <MDBCol>
      <MDBCard style={{ backgroundColor: 'red', color: 'white' }}>
        <MDBCardBody>
          <p>This is the back of {props.value} card.</p>
          <MDBBtn value={props.value} onClick={props.handleCardClick}>Flip</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default FlippingCardBack