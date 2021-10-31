import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { TwitterTweetEmbed } from 'react-twitter-embed'


export default function AnalysisPreviewCard(props){
  return(
    <Container maxWidth="xs">
      <Card
        sx={{maxWidth: 400, backgroundColor: props.color, borderRadius: 8}}
      >
        <CardActionArea>
          <Box sx={{marginTop: 3, marginLeft: 5, marginRight: 5}}>
            <TwitterTweetEmbed
              tweetId={'1454901150193438725'}
            />
          </Box>
          <CardContent>
            <Box sx={{marginLeft: 4}}>
              <Typography variant="h4" color="text.tertiary" sx={{fontWeight: "bold"}}>
                Totalmente falso
              </Typography>
              <Typography variant="h6" color="text.tertiary">
                10 de agosto de 2021
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
