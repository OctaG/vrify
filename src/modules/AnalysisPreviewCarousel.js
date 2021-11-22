import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AnalysisPreviewCard from '../components/AnalysisPreviewCard.js'

import firebase from "../utils/firebase.js";

const axios = require('axios');

export default function AnalysisPreviewCarousel(props){
  const [tweetList, setTweetList] = useState([]);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if(!props.queryOnlyProfile){
      axios.get('http://127.0.0.1:5000/readAllTweetsFromDB')
      .then(function (response) {
        setTweetList(Object.values(response.data));
      });
    }else{
      axios.get('http://127.0.0.1:5000/readUsersSavedTweets', {
        params: {
          uid: user.uid
        }
      }).then(function (response) {
        setTweetList(response.data);
      });
    }
 }, []);

  return(
    <Box>
      <Grid container justifyContent="center" spacing={2}>
        {tweetList.slice(0,4).map((value) => (
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
