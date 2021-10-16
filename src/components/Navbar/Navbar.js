import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          FRAG
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
