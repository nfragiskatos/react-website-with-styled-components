import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../global.styles";
import theme from "../../theme";
import {
  HamburgerIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavLink,
  NavLogo,
  NavMenu,
} from "./Navbar.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const onClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: theme.palette.secondary.main }}>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="/react-website-with-styled-components/"
            onClick={closeMobileMenu}
          >
            <NavIcon />
            FRAG
          </NavLogo>
          <HamburgerIcon onClick={onClick}>
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>
          <NavMenu onClick={onClick} click={click}>
            <NavItem>
              <NavLink to="/react-website-with-styled-components/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/react-website-with-styled-components/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/react-website-with-styled-components/products">
                Products
              </NavLink>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/react-website-with-styled-components/sign-up">
                  <Button>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/react-website-with-styled-components/sign-up">
                  <Button>signup</Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
