import React, {useState} from 'react';

import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import PersonIcon from '@mui/icons-material/Person';

import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

import firebase from "../utils/firebase.js";

export default function Header(props){
  const [user, setUser] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      setUser(true);
    }else{
      setUser(false);
    }
  });
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
            {
              user?
              <Nav.Link as={Link} to={'/profile'}>
                <Avatar sx={{marginLeft: 2, backgroundColor:"primary.main"}}>
                  <PersonIcon/>
                </Avatar>
              </Nav.Link>
              :
              <Nav.Link as={Link} to={'/login'}>LOG IN</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Box>
  );
}
