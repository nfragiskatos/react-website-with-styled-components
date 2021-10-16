import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import theme from "../../theme";
import {
  HamburgerIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./Navbar.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  return (
    <IconContext.Provider value={{ color: theme.palette.secondary.main }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            FRAG
          </NavLogo>
          <HamburgerIcon onClick={onClick}>
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>
          <NavMenu onClick={onClick} click={click}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
