import React from 'react'
import { MDBNavbar, MDBNavbarNav, MDBIcon } from 'mdbreact'
import NavBarScore from '../NavBarScore'
import GameContext from '../../utils/GameContext'

const NavBar = props => {
  return (
    <GameContext.Consumer>
      {
        ({ maxScore, score }) => (
          <MDBNavbar className="primary-color">
            <MDBNavbarNav left={true}>
              <span className="align-middle text-white" style={{ fontSize: '3rem' }}>
                <MDBIcon icon="brain" /> Memory
              </span>
            </MDBNavbarNav>
            <NavBarScore showScore={props.showScore} side="right" />
          </MDBNavbar>
        )
      }
    </GameContext.Consumer>
  )
}

export default NavBar