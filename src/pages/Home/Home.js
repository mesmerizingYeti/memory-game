import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBJumbotron, MDBBtn } from 'mdbreact'
import NavBar from '../../components/NavBar'

class Home extends Component {

  render() {
    return (
      <>
        <NavBar showScore={false} />
        <MDBContainer>
          <MDBJumbotron>
            <h1>Hello World!</h1>
            <Link className="btn btn-secondary" path="/game"></Link>
          </MDBJumbotron>
        </MDBContainer>
      </>
    )
  }

}

export default Home