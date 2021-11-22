import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Header from './components/Header.js'

import Search from './pages/Search.js'
import Analysis from './pages/Analysis.js'
import Profile from './pages/Profile.js'
import LogIn from './pages/LogIn.js'
import SignUp from './pages/SignUp.js'

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
      true: "#5bd0a3"
    }
  },
  typography: {
    fontFamily: 'Helvetica',
  },
});

function App(){
  return(
    <ThemeProvider theme={theme}>
      <Router>
        <Container disableGutters maxWidth='false'>
          <Header/>
        </Container>
        <Switch>
          <Route path="/analysis">
            <Analysis/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/">
            <Search/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
