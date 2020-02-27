import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import classes from "./Navbar.module.scss";
const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className={classes.main}>
        <NavbarBrand href="/">QuizAtoZ</NavbarBrand>

        {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        <InputGroup className={classes.searchbar}>
          <Input placeholder="username" />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <i class="fas fa-search"></i>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavLink>
            <i class="fas fa-bell"></i>
          </NavLink>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav>
              <i class="fas fa-user-circle"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>What's New</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
