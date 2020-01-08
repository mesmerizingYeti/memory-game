import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/game" className="btn btn-secondary">
              Start
            </Link>
          </MDBJumbotron>
        </MDBContainer>
      </>
    )
  }

}

export default Home