import React from 'react'
import { MDBNavbarNav } from 'mdbreact'
import GameContext from '../../utils/GameContext'

const NavBarScore = props => {
  if (props.showScore) {
    return (
      <GameContext.Consumer>
        {
          ({ score, maxScore }) => (
            <MDBNavbarNav 
              right={ props.side === 'right' ? true : false }
              left={ props.side === 'left' ? true : false }
            >
              <span className="align-middle text-white" style={{ fontSize: '1.5rem' }}>
                {`Score: ${score} | Max Score: ${maxScore}`}
              </span>
            </MDBNavbarNav>
          )
        }
      </GameContext.Consumer>
    )
  }
  return null
}

export default NavBarScore