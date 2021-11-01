// TODO: Refactorizar este módulo y Article Preview Card en un solo componente.

import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArticlePreviewCard from '../components/ArticlePreviewCard.js'
import AnalysisPreviewCard from '../components/AnalysisPreviewCard.js'

export default function AnalysisPreviewCarousel(props){
  return(
    <Carousel showArrows={false} showStatus={false}>
      {[0, 1].map((value) => (
        <Grid sx={{ flexGrow: 1, marginBottom: 6}} container spacing={1}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
              {[0, 1, 2, 3].map((value) => (
                <Grid key={value} item>
                    <AnalysisPreviewCard color={props.color}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Carousel>
  );
}
