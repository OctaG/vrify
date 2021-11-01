import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import SearchBar from '../components/SearchBar.js'


export default function Search(){
  return(
    <Container maxWidth="xl">
      <Box sx={{marginTop: 20}}>
        <Typography
          variant="h1"
          color="text.primary"
          align="center"
          sx={{fontWeight: "bold"}}
        >
          VRIFY
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          color="text.secondary"
          align="center"
          sx={{fontWeight: "200"}}
        >
        Busque qué tan cierto es un tweet, un post de Facebook o una
        publicación de Instagram
        </Typography>
      </Box>
      <Box sx={{marginTop: 5}}>
        <SearchBar/>
      </Box>
      <Box textAlign='center' sx={{padding: 5}}>
        <Button
          variant="contained"
          size="large"
          sx={{
              backgroundColor: "button.primary",
              '&:hover':{backgroundColor: "button.primary"},
              borderRadius: 4,
              paddingTop: 2,
              paddingRight: 15,
              paddingBottom: 2,
              paddingLeft: 15,
            }}
        >
          Buscar
        </Button>
      </Box>
    </Container>
  );
}
