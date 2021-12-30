import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/themes"
import GlobalStyle from "./globalStyles"

import main from './components/main'
import blog from './components/blog'
import works from './components/works'
import about from  './components/about'
import skills from './components/skills'

function App() {
  const location = useLocation();

  return <>
    <GlobalStyle />
    <ThemeProvider theme = {lightTheme}>
      
        <Switch location = {location} key = {location.pathname}>
          <Route exact path = "/" component = {main} />
          <Route exact path = "/blog" component = {blog} />
          <Route exact path = "/works" component = {works} />
          <Route exact path = "/about" component = {about} />
          <Route exact path = "/skills" component = {skills} />
        </Switch>
      
      
    </ThemeProvider>
    
  </>

}

export default App

