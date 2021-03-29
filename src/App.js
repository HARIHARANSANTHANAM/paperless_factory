import React from 'react';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import {Route,Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import AppBar from './Components/Appbar'
import Employee from './Components/Employee';
import Sales from './Components/Sales';
import Stock from './Components/Stock';


function App() {

  const [themes, settheme] = React.useState(false)
  const [open, setopen] = React.useState(false)
  const [search,setsearch]=React.useState("")

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themes ? 'dark' : 'light',
        },
      }),
    [themes],
  );
  return (
    <ThemeProvider theme={theme}>
    <Paper >
    <AppBar setTheme={settheme} setsearch={setsearch}  mode={themes} setopen={setopen} open={open} />
   
    <Switch>
      <Route exact path="/home">
        <div style={{display:"flex",justifyContent:"space-around"}}>
      <Sidebar setopen={setopen} open={open}/>
        <Home  open={open} />
        </div>
      </Route>
      <Route path="/Employee">
      <div style={{display:"flex"}}>
      <Sidebar setopen={setopen} open={open}/>
        <Employee open={open}/>
        </div>
      </Route>
      <Route path="/Sales">
      <div style={{display:"flex"}}>
      <Sidebar setopen={setopen} open={open} />
        <Sales open={open} />
        </div>
      </Route>
      <Route path="/Stock">
      <div style={{display:"flex"}}>
      <Sidebar setopen={setopen} open={open} />
        <Stock open={open} />
        </div>
      </Route>

    </Switch>
    </Paper>
  </ThemeProvider>
  );
}

export default App;
