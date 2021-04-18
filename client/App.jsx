import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginForm from './components/user/LoginForm'
import SignUpForm from './components/user/SignUpForm'
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

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <LoginForm /> */}
        <SignUpForm />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}