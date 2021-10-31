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
    <Card sx={{minWidth: 345, backgroundColor: props.color, borderRadius: 8}}>
      <CardActionArea>
        <Box sx={{marginTop: 3, marginBottom: -5}}>
          <TwitterTweetEmbed
            tweetId={'1454900611401584645'}
          />
        </Box>
        <CardContent>
          <Typography variant="h4" color="text.tertiary" sx={{fontWeight: "bold"}}>
            Totalmente falso
          </Typography>
          <Typography variant="h6" color="text.tertiary">
            10 de agosto de 2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
