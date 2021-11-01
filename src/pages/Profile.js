import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ProfileCard from '../components/ProfileCard.js'

import AnalysisPreviewCarousel from'../modules/AnalysisPreviewCarousel.js'

export default function Profile(){
  return(
    <Container maxWidth="xl">
      <Box sx={{marginTop: 5, flexGrow: 1 }}>
        <ProfileCard/>
      </Box>
      <Box sx={{marginTop: 10}}>
        <Typography
          gutterBottom
          variant="h3"
          color="text.secondary"
          sx={{fontWeight: "bold"}}
        >
          Análisis agregados recientemente,
        </Typography>
        <AnalysisPreviewCarousel color="card.true"/>
      </Box>
    </Container>
  );
}
