import React from "react";
import styled from "styled-components";
import { FlexRowDiv } from "../../../styles/common";
import Label from "../atoms/Label";
import Logo from "../molecules/Logo";
import ScrollLabel from "../molecules/ScrollLabel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBarSection = () => {
  const expand = "lg";
  const scrollLabelList: Array<string> = [
    "Profile",
    "Skills",
    "Blogs",
    "Project",
  ];
  return (
    <>
      <NavbarC key={expand} expand={expand} sticky="top">
        <Container>
          <Navbar.Brand href="#Intro">
            <Logo></Logo>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {scrollLabelList.map((v, i) => (
                <Nav.Link href={`#${v}`}>
                  <ScrollLabel
                    key={i}
                    text={v}
                    scrollHeight={16}
                    color="#8CC9EB"
                  ></ScrollLabel>
                </Nav.Link>
              ))}
              <Nav.Link>
                <Label text="로그인" fontSize={13} color="#A8C4D3"></Label>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarC>
    </>
  );
};

const NavbarC = styled(Navbar)`
  background-color:#fff;

`

export default NavBarSection;
