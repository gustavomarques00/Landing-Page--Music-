import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export const Header = () => {
  return (
    <Navbar collapseOnSelect  expand="lg" variant="light" bg="ight">
      <Container className="pb-4 border-bottom border-1">
        <Nav style={{color: "#FFFFFF"}} className="align-items-center">
          <Navbar.Brand href="#">
            <img src="/images/Logo.svg" alt="Logo" width={40} height={40} />
          </Navbar.Brand>
          <Nav.Item style={{lineHeight: "24px"}}>
            <span style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "16px",
              }} >Up</span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: "300",
                marginLeft: "5px",
              }}
            >
              Souly
            </span>
          </Nav.Item>
        </Nav>
        <Nav
          className="justify-content-center"
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: 14,
            lineHeight: "17px",
            gap: "20px",
          }}
        >
          <Nav.Item>
            <Nav.Link style={{color: "#D1CFCF"}} href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color: "#D1CFCF"}} href="/home">Category</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color: "#D1CFCF"}} href="/home">Trending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color: "#D1CFCF"}} href="/home">Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color: "#D1CFCF"}} href="/home">Community</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav style={{ lineHeight: "17px"}} className="justify-content-end align-items-center gap-3">
          <Nav.Item>
            <Nav.Link style={{ fontFamily: "Rubik", fontWeight: "400", fontSize: "14px", color: "#F0D800" }} href="/home">Sign up</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{border: "1px solid #FFFFFF", borderRadius: "100px", padding: "5px 25px"}}>
            <Nav.Link style={{ fontFamily: "Rubik", fontWeight: "600", fontSize: "14px", color: "#D1CFCF" }} href="/home">Sign In</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
