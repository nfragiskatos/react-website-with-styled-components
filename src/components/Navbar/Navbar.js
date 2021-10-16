import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  HamburgerIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
} from "./Navbar.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  return (
    <IconContext.Provider value={{ color: "#FFFFFF" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            FRAG
          </NavLogo>
          <HamburgerIcon onClick={onClick}>
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
