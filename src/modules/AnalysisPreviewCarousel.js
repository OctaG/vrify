import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import AnalysisPreviewCard from '../components/AnalysisPreviewCard.js'

import firebase from "../utils/firebase.js";

const axios = require('axios');

export default function AnalysisPreviewCarousel(props){
  const [tweetList, setTweetList] = useState([]);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if(!props.queryOnlyProfile){
      axios.get('https://vrify-backend.herokuapp.com/readAllTweetsFromDB')
      .then(function (response) {
        setTweetList(Object.values(response.data));
      });
    }else{
      axios.get('https://vrify-backend.herokuapp.com/readUsersSavedTweets', {
        params: {
          uid: user.uid
        }
      }).then(function (response) {
        setTweetList(response.data);
      });
    }
 });

  return(
    <Box>
      <Grid container justifyContent="center" spacing={2}>
        {tweetList.map((value) => (
          <Grid key={value.tweetID} item>
              <AnalysisPreviewCard
                tweet={value}
                color={value.analysis === "REAL" ? "card.true" : "card.false"}
              />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
