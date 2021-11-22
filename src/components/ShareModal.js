import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'primary.main',
  p: 5,
  borderRadius: 3,
  outline: 'none',
};

const paperStyle = {
  marginTop: 3,
  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 3,
  opacity: 0.85,
  borderRadius: 3,
};

export default function ShareModal(props) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.link)
  }

  return (
    <Box>
      <Modal
        open={true}
      >
        <Box sx={modalStyle}>
          <Typography
            variant="h4"
            sx={{color: "text.tertiary", fontWeight: "bold"}}>
            Comparte este análisis
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{color: "text.tertiary", fontWeight: "lighter"}}>
            Utiliza el siguiente link y ayuda a detener las fakes news:
          </Typography>
          <Paper sx={paperStyle}>
            <Grid container>
              <Grid item sm={10}>
                <Typography
                  sx={{ fontSize: 17, marginTop: 1, color: "#2c75db", fontWeight:"bold"}}
                >
                  {props.link}
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <IconButton
                  onClick={copyToClipboard}
                  sx={{color:"button.primary"}}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
          <Box sx={{marginTop: 3, marginLeft: 69}}>
            <Button
              onClick={() => props.closeModal(false)}
              variant="contained"
              sx={
                {
                  backgroundColor: "button.secondary",
                  '&:hover':{backgroundColor: "button.secondary"}
                }
              }
            >
              Listo
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
