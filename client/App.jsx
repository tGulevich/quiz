import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginForm from './components/user/LoginForm'
import SignUpForm from './components/user/SignUpForm'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './style.scss'
// import { Switch } from '@material-ui/core'

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
    <BrowserRouter>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            {/* <LoginForm /> */}
            <Route path='/login' component={LoginForm} />
            <Route path='/registration' component={SignUpForm} />
            {/* <SignUpForm /> */}
          </Switch>
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  )
}