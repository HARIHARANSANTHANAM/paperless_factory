import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {Container,Fade } from '@material-ui/core';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    }))
function Sales(props) {
    const classes = useStyles();
    
    const {open}=props;
    return (
        <Fade in={true} style={{marginTop:"10vh",minHeight:"90vh",padding:"0px 20px"}}>
        <div
          >
           <h1>Sales</h1> 
          </div>
          </Fade>
    )
}

export default Sales
