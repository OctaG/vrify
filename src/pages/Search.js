import React, {useState} from 'react';

import { useHistory } from "react-router-dom";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SearchBar from '../components/SearchBar.js'
import AnalysisPreviewCarousel from '../modules/AnalysisPreviewCarousel.js';

const axios = require('axios');

export default function Search(){

  const history = useHistory();
  const [url, setURL] = useState("")

  const returnURL = (url) => {
    setURL(url);
  }

  const analyzeTweet = () => {
    axios.post('https://vrify-backend.herokuapp.com/pushTweetAnalysisToDB', {
      url: url,
    }).then(function (response) {
      history.push("/Analysis", {tweetID: response.data})
    });
  }


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
        <SearchBar returnURL={returnURL}/>
      </Box>
      <Box textAlign='center' sx={{padding: 5}}>
        <Button
          onClick={() => {
            analyzeTweet();
          }}
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
      <Typography
        variant="h3"
        color="text.secondary"
        sx={{fontWeight: "300", marginTop: 10, marginLeft:4}}
      >
        Tweets agregados recientemente,
      </Typography>
      <Box sx={{marginTop: 5, marginBottom: 10}}>
        <AnalysisPreviewCarousel/>
      </Box>
    </Container>
  );
}
