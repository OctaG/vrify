import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';

import { TwitterTweetEmbed } from 'react-twitter-embed'


export default function AnalysisPreviewCard(props){
  const tweet = props.tweet
  return(
    <Container>
      <Link to={'/analysis?id='+tweet.tweetID} style={{textDecoration:"none"}}>
        <Card sx={{minWidth: 345, backgroundColor: props.color, borderRadius: 8}}>
          <CardActionArea>
            <Box sx={{minHeight: 600, margin:2, marginBottom: -5}}>
              <TwitterTweetEmbed
                tweetId={tweet.tweetID}
              />
            </Box>
            <CardContent>
              <Typography
                variant="h4"
                color="text.tertiary"
                align="center"
                sx={{fontWeight: "bold"}}
              >
                Probably {tweet.analysis}
              </Typography>
              <Typography
                variant="h6"
                color="text.tertiary"
                align="center"
              >
                {tweet.lastAnalysis}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Container>
  );
}
