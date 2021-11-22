import React from 'react';

import { useLocation } from "react-router-dom";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { TwitterTweetEmbed } from 'react-twitter-embed'

import SearchBar from '../components/SearchBar.js'
import AnalysisCard from '../components/AnalysisCard.js'
import FaqsCard from '../components/FaqsCard.js'

import ArticlePreviewCarousel from'../modules/ArticlePreviewCarousel.js'

export default function Analysis(){
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tweetID = location.state? location.state.tweetID :  params.get('id');
  return(
    <Container maxWidth="xl">
      <Box sx={{marginTop: 5, flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <TwitterTweetEmbed
              tweetId={tweetID}
            />
          </Grid>
          <Grid item xs={6}>
            <AnalysisCard tweetID={tweetID}/>
          </Grid>
        </Grid>
      </Box>
      {/*
      <Box sx={{marginTop: 10}}>
        <Typography
          gutterBottom
          variant="h3"
          color="text.secondary"
          sx={{fontWeight: "bold"}}
        >
          Esto es lo que dicen otras fuentes,
        </Typography>
        <ArticlePreviewCarousel/>
      </Box>
      <Box sx={{marginTop: 5, marginBottom: 10}}>
        <Typography
          gutterBottom
          variant="h3"
          color="text.secondary"
          sx={{fontWeight: "bold"}}
        >
          Mira preguntas similares,
        </Typography>
        <FaqsCard/>
      </Box>
      */}
    </Container>
  );
}
