import React,{Component} from "react";

import  {  Collapse,Navbar,NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink} from 'reactstrap';
class NavBar extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render(){
        return(
            <div>
   <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Exercise Tracker App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Exercises</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create">Create Exercise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/user">Create User</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
          
            </div>
        );
    }
}
export default NavBar;