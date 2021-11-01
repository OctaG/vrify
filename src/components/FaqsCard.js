import React from 'react';

import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ width: '90%', fontWeight: "bold"}}
        >
          ¿Puede la vacuna de Covid 19 provocar magnetismo?
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: 'text.secondary', fontWeight: "bold" }}
        >
          No.
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography  variant="h6"  color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        varius diam a nibh venenatis vestibulum. Vivamus fermentum enim quis
        nisi maximus, viverra consequat dolor aliquet. Aenean sed nulla
        egestas, venenatis nisl quis, congue tortor. Sed efficitur volutpat.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
