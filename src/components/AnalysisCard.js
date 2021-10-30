import React from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';


export default function AnalysisCard(){
  return(
    <Container maxWidth="md">
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            color="text.primary"
            sx={{fontWeight: "bold"}}
          >
            Totalmente falso,
          </Typography>
          <Typography variant="h4" color="text.secondary">
            estamos completamente seguros de que la información de este
            tweet es falsa. Ayudanos a erradicar noticias falsas no
            compartiendo este tweet.
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
          >
            Difunde que este tweet es falso
          </Button>
          <Button
            variant="contained"
            endIcon={<SaveAltIcon/>}
            sx={
              {
                backgroundColor: "button.tertiary",
                '&:hover':{backgroundColor: "button.tertiary"}
              }
            }
          >
            Guardar esta información
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
