import React from 'react'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Searchbar from './Searchbar';
import { makeStyles } from '@material-ui/core/styles';
import Notificatonbar from './Notificatonbar';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';


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

function Appbar(props) {
    const classes = useStyles();
    
    const { setTheme, mode,setopen,open,setsearch} = props;
    
    const isMobileView = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <AppBar
                position="fixed"
                color="secondary"
                color="black"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}
            >
                <Toolbar
                    style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}
                >
                    <div
                        style={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setopen(!open)}>
                            <MenuIcon />
                        </IconButton>
                        {
                        isMobileView?<div></div>:
                        <Button
                            startIcon={<LiveTvIcon />}
                            color="inherit"
                            size="large">
                            PaperLess
                    </Button>
                            }

                    </div>
                    
                    <Searchbar placeholder="Search..." setword={setsearch} mode={mode}/>

                    {
                        isMobileView?<div></div>:
                    <Notificatonbar style={{ display: "flex", justifyContent: "space-evenly" }} setTheme={setTheme} mode={mode} />
                    }       
                </Toolbar>
            </AppBar>

            
        </div>
    )
}

export default Appbar
