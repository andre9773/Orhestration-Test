import React from "react";
import './App.css';
import Navbar from './pages/Navbar.js';

import Dashboard from './containers/Dashboard'
import {ThemeProvider } from 'styled-components'
import {GlobalStyles} from './styles/Global'
import {lightTheme, darkTheme} from './styles/theme'
import {useThemeContext} from './context/themeContext'



function App() {

  const {theme} = useThemeContext()


  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} className="App">
      <GlobalStyles/>
      <Dashboard/>

     
    
    </ThemeProvider>
  );
}

export default App;
