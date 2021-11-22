import React, {useState} from 'react';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import {useHistory} from "react-router-dom";

import firebase from "../utils/firebase.js";

export default function Header(props){

  const history = useHistory();

  const logOut = () => {
    firebase.auth().signOut().then(() => {
      history.push("./search")
    });
  }

  return(
    <Container>
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 1,
        }}
      >
         <Avatar sx={{
           bgcolor: "primary.main",
           width: 80,
           height: 80,
          }}
         >
          MS
        </Avatar>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          sx={{fontWeight: "bold", marginBottom: -1}}
        >
        Michael Scott
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          sx={{fontWeight: "100"}}
        >
          Miembro desde abril de 2021
        </Typography>
      </Box>
      <Box sx={{marginTop: 3, textAlign:"center"}}>
        <Button
          variant="contained"
          sx={
            {
              backgroundColor: "button.secondary",
              '&:hover':{backgroundColor: "button.secondary"}
            }
          }
          onClick={logOut}
        >
          Salir de mi cuenta
        </Button>
      </Box>
    </Container>
  );
}
