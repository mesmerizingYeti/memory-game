import React, { Component } from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import FlippingCard from '../../components/FlippingCard'
import NavBar from '../../components/NavBar'
import GameContext from '../../utils/GameContext'

const cards = [
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

class Game extends Component {

  state = {
    currentCard: { value: -1, flipped: true },
    cards,
    score: 0,
    maxScore: 0,
    handleCardClick: event => {
      

      let [...tempArr] = this.state.cards
      tempArr[event.target.value].flipped = !tempArr[event.target.value].flipped
      this.setState({ cards: tempArr })
    },
    incrementScore: () => {
      this.setState({ score: this.state.score + 1 })
    },
    updateMaxScore: currentMax => {
      if (currentMax > this.state.maxScore) {
        this.setState({ maxScore: currentMax })
      }
    },
    resetGame: () => {
      this.setState({ cards, score: 0 })
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <NavBar showScore={true} />
        <MDBContainer>
          <MDBRow>
            {
              this.state.cards.map((card, index) =>
                <FlippingCard
                  key={index}
                  flipped={card.flipped}
                  value={card.value}
                  handleCardClick={this.state.handleCardClick} />)
            }
          </MDBRow>
        </MDBContainer>
      </GameContext.Provider>
    )
  }

}

export default Game