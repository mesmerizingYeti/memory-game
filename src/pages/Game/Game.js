import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact'
import ReactCardFlip from 'react-card-flip'
import Card from '../../components/Card'
import GameContext from '../../utils/GameContext'

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
    ],
    handleCardClick: event => {
      let [...tempArr] = this.state.cards
      tempArr[event.target.value].flipped = !tempArr[event.target.value].flipped
      this.setState({ cards: tempArr })
    }
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          {
            this.state.cards.map((card, index) =>
              <Card
                key={index}
                flipped={card.flipped}
                value={card.value}
                handleCardClick={this.state.handleCardClick} />)
          }
        </MDBRow>
      </MDBContainer>
    )
  }

}

export default Game