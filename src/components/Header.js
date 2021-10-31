import React, {useState} from 'react';

import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(props){
  return(
    <Box sx={
      {
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 2,
        fontFamily: "fontFamily"
      }
    }>
      <Navbar collapseOnSelect sticky="top" bg="white" variant="light">
        <Navbar.Brand>
          <Typography sx={{color:"primary.main"}} variant='h4'>
            vrify
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/search'}>BUSCAR</Nav.Link>
            <Nav.Link>CÓMO FUNCIONA</Nav.Link>
            <Nav.Link>FEEDBACK</Nav.Link>
            <Nav.Link as={Link} to={'/login'}>LOG IN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Box>
  );
}
