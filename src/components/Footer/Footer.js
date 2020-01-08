import React from 'react'
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdbreact'

const Footer = props => {
  return (
    <MDBFooter className="primary-color font-medium pt-4 mt-4">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <div className="text-center text-md-left">
              <span>© 2020 Nathanael Hauser</span>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="text-center text-md-right">
              <a href="https://github.com/mesmerizingYeti/clicky-game">Githup Repo</a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer