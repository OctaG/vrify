import React, {useState} from 'react';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


export default function Header(props){
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
    </Container>
  );
}
