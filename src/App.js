import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import AnalysisCard from './components/AnalysisCard.js'

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE5857"
    },
    secondary: {
      main: "#2a7fe8"
    },
    text:{
      primary: "#FE5857",
      secondary: "#000000"
    },
    button:{
      primary: "#FE5857",
      secondary: "#576AFE",
      tertiary: "#3FC96F"
    }
  },
  text: {
    primary: "#FE5857",
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
        <AnalysisCard/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
