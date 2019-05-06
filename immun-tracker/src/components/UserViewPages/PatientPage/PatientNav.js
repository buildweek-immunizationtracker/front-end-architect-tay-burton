import React, { Component } from "react";
import { connect } from "react-redux";
//Bootstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

//React Router
import { Link } from "react-router-dom";

//Style
import { PNavbarWrapper } from './PNavbarWrapper'

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe} from "@fortawesome/free-solid-svg-icons";




class PatientNav extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar= () => {
    this.setState({ collapsed: !this.state.collapsed});
  }
 logout(){ 
        localStorage.removeItem('token');        
    }

 
  render() {
    return(
     <PNavbarWrapper>
    <Navbar light>
      <NavbarBrand  className="mr-auto"><Link to="/patienthub" className='logo'>Immunization Tracker  <FontAwesomeIcon icon={faSyringe} /></Link></NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      <Collapse isOpen={!this.state.collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <Link className='link' to="/addpatient">Add Patient</Link>
          </NavItem>
          <NavItem>
            <Link className='link' to="/user/patients">View Patient</Link>
          </NavItem>
          <NavItem>
            <Link className='link' onClick={this.logout} to='/login'> Logout </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </PNavbarWrapper>
  )
  }
}



const mapStateToProps = state => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
     
)(PatientNav)