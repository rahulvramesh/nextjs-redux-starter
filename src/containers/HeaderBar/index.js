import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "./headerbar.module.scss";

class HeaderBar extends React.Component {
  render() {
    return (
      <>
        <div className={styles.headerBar}>
          <Navbar
            collapseOnSelect
            bg="baground-primary"
            expand="lg"
            className={" nav-bar " + styles.navbarNav}
          >
            <Navbar.Brand href="#home">
              <img
                src="https://gh-wp.s3-ap-southeast-1.amazonaws.com/uploads/greenhouse.svg"
                className={styles.logo}
                alt="greenhouse"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="About" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features" className={styles.navLinkPad}>
                  Services
                </Nav.Link>
                <Nav.Link href="#pricing" className={styles.navLinkPad}>
                  RESOURCES
                </Nav.Link>
                <Nav.Link href="#pricing" className={styles.navLinkPad}>
                  Service Providers
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default HeaderBar;
