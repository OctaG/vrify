import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header.js'

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE5857"
    },
    secondary: {
      main: "#2a7fe8"
    },
  },
  typography: {
    fontFamily: 'Helvetica',
  },
});

function App(){
  return(
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth='false'>
        <Header/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
