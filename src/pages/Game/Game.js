import React, { Component } from 'react'
import { MDBNavbar, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact'
import ReactCardFlip from 'react-card-flip'

class Game extends Component {

  state = {
    cards: [
      { value: 0, flipped: false },
      { value: 1, flipped: false },
      { value: 2, flipped: false },
      { value: 3, flipped: false },
      { value: 4, flipped: false },
      { value: 5, flipped: false },
      { value: 6, flipped: false },
      { value: 7, flipped: false },
      { value: 8, flipped: false },
      { value: 9, flipped: false },
      { value: 10, flipped: false },
      { value: 11, flipped: false },
    ]
  }

  handleCardClick = event => {
    let [...tempArr] = this.state.cards
    tempArr[event.target.value].flipped = !tempArr[event.target.value].flipped
    this.setState({ cards: tempArr })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          {
            this.state.cards.map((card, index) => {
              return (
                <ReactCardFlip 
                  isFlipped={card.flipped} 
                  flipDirection="vertical" 
                  containerStyle={{margin: "10px"}} 
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
            })
          }
        </MDBRow>
      </MDBContainer>
    )
  }

}

export default Game