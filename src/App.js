import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import AnalysisCard from './components/AnalysisCard.js'
import ArticlePreviewCard from './components/ArticlePreviewCard.js'
import FaqsCard from './components/FaqsCard.js'
import AnalysisPreviewCard from './components/AnalysisPreviewCard.js'

import ArticlePreviewCarousel from './modules/ArticlePreviewCarousel.js'


const theme = createTheme({
  palette: {
    primary: {
      main: "#FE5857"
    },
    secondary: {
      main: "#2a7fe8"
    },
    text: {
      primary: "#FE5857",
      secondary: "#000000",
      tertiary: "#FAFAFA"
    },
    button: {
      primary: "#FE5857",
      secondary: "#576AFE",
      tertiary: "#3FC96F"
    },
    card: {
      false: "#FE5857",
      true: "#5BD0A3",
      else: "#E6C773",
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
        <AnalysisPreviewCard/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
