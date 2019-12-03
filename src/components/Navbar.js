import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import { connect } from 'react-redux'
  import  { logout } from '../redux/action'

class Header extends React.Component {
    state = {
      isOpen: false
    };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link className='navbar-brand' to='./' style={{color: 'white'}}>
              home
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                  <Link to='/not-home'>
                      home
                  </Link>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color: 'white'}}>
                  {
                    this.props.username
                    ?
                    this.props.username
                    :
                    'Click Me'
                  }
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to='/login'>
                    <DropdownItem>
                      Login
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.logout}>
                    Register
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return{
    username: state.user.username
  }
}

export default connect(mapStatetoProps, {logout})(Header);