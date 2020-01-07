import React, { Component } from 'react'
import { MDBContainer, MDBJumbotron } from 'mdbreact'

class Home extends Component {

  render() {
    return(
      <MDBContainer>
        <MDBJumbotron>
          <h1>Hello World!</h1>
        </MDBJumbotron>
      </MDBContainer>
    )
  }

}

export default Home