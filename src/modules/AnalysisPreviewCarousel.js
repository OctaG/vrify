import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArticlePreviewCard from '../components/ArticlePreviewCard.js'
import AnalysisPreviewCard from '../components/AnalysisPreviewCard.js'

const axios = require('axios');

export default function AnalysisPreviewCarousel(props){
  const [tweetList, setTweetList] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/readAllTweetsFromDB')
    .then(function (response) {
      setTweetList(Object.values(response.data));
    });
 }, []);

  return(
    <Box>
      <Grid container justifyContent="center" spacing={2}>
        {tweetList.slice(0,3).map((value) => (
          <Grid key={value} item>
              <AnalysisPreviewCard
                tweet={value}
                color={value.analysis == "REAL" ? "card.true" : "card.false"}
              />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
