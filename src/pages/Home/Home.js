import React, { Component } from 'react'
import { MDBContainer, MDBJumbotron } from 'mdbreact'
import NavBar from '../../components/NavBar'

class Home extends Component {

  render() {
    return (
      <>
        <NavBar showScore={false} />
        <MDBContainer>
          <MDBJumbotron>
            <h1>Hello World!</h1>
          </MDBJumbotron>
        </MDBContainer>
      </>
    )
  }

}

export default Home