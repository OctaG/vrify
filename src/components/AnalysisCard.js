import React, {useState, useEffect} from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import ShareModal from './ShareModal.js';

import firebase from "../utils/firebase.js";

const axios = require('axios');

export default function AnalysisCard(props){

  const [tweetAnalysis, setTweetAnalysis] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [shereableLink, setShereableLink] = useState(
    "http://localhost:3000/Analysis?id=" + props.tweetID
  );
  const [analysisDescriptionText, setAnalysisDescriptionText] = useState("");
  const user = firebase.auth().currentUser;

  useEffect(() => {
    console.log("Entered");
    axios.get('https://vrify-backend.herokuapp.com/readTweetAnalysisFromDB', {
    params: {
      tweetID: props.tweetID
    }
  }).then(function (response) {
      setTweetAnalysis(response.data);
      if(response.data == "FAKE"){
        setAnalysisDescriptionText(
          "creemos que este tweet contiene información falsa. Ayudanos a " +
          "combatir las noticias falsas difundiendo que el tweet es " +
          "posiblemente falso."
        );
      }else{
        setAnalysisDescriptionText(
          "creemos que este tweet contiene información verídica. Ayudanos a " +
          "combatir las noticias falsas difundiendo que el tweet es " +
          "posiblemente verídico."
        );
      }
    });
 }, []);

  const handleShare = () =>{
    const setShareableLink = "http://localhost:3000/Analysis?id=" + props.tweetID
    setOpenModal(true);
  };

  const handleSave = () => {
    axios.post('https://vrify-backend.herokuapp.com/saveTweetInUserProfile', {
      tweetID: props.tweetID,
      uid: user.uid,
    }).then(function (response) {
      console.log("Finished handle save");
    });
  }


  return(
    <Container maxWidth="md">
      {openModal?
        <ShareModal link={shereableLink} closeModal={setOpenModal}/>
        :
        null
      }
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            color="text.primary"
            sx={{fontWeight: "bold"}}
          >
            {tweetAnalysis},
          </Typography>
          <Typography variant="h4" color="text.secondary">
            {analysisDescriptionText}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            endIcon={<IosShareIcon/>}
            sx={
              {
                backgroundColor: "button.secondary",
                '&:hover':{backgroundColor: "button.secondary"}
              }
            }
            onClick={handleShare}
          >
            Difunde que este tweet es falso
          </Button>
          {user?
            <Button
              variant="contained"
              endIcon={<SaveAltIcon/>}
              sx={
                {
                  backgroundColor: "button.tertiary",
                  '&:hover':{backgroundColor: "button.tertiary"}
                }
              }
              onClick={handleSave}
            >
              Guardar esta información
            </Button>
            :
            null
          }
        </CardActions>
      </Card>
    </Container>
  );
}
