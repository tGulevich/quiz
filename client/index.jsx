import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './style.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#64d8cb',
      main: '#26a69a',
      dark: '#00766c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <LoginForm />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
