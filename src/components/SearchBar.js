import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props){
  return(
    <Container maxWidth="xl">
        <OutlinedInput
          placeholder="Pegue aquí el link del post que desea buscar"
          fullWidth
          startAdornment={
           <InputAdornment position="start">
             <SearchIcon sx={{color:"primary.main"}}/>
           </InputAdornment>
         }
          sx={{
            marginTop: 5,
            borderRadius: 4,
            color: "text.secondary",
          }}
          onChange = {(e) => props.returnURL(e.target.value)}
        />
    </Container>
  );
}
