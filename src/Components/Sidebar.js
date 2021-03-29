import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { HomeOutlined, ShoppingBasket, ShoppingCart } from '@material-ui/icons';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {IconButton, Drawer,Button } from '@material-ui/core';
import clsx from 'clsx';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { NavLink } from 'react-router-dom';
import FlagIcon from '@material-ui/icons/Flag';


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 1,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      }
}))

function Sidebar(props) {
    const classes = useStyles();
    const {setopen,open } = props;
    
    return (
        <div style={{ background: "rgba(0,0,0,.1)"}}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                open={open}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  })}
                  classes={{
                    paper: clsx({
                      [classes.drawerOpen]: open,
                      [classes.drawerClose]: !open,
                    }),
                  }}
            >

                <div  style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap",alignItems:"center",padding:10 }}>
                <Button
                            startIcon={<LiveTvIcon />}
                            color="inherit"
                            size="large">
                            PaperLess
                    </Button>
                    <IconButton>
                    </IconButton>
                </div>
                
                   
                <Divider />
                <List>
                  <NavLink activeStyle={{textDecoration:"none",color:"teal"}} to="/home">
                <ListItem button key="Home">
                            <ListItemIcon size="small" > <HomeOutlined   /></ListItemIcon>
                            <ListItemText primary="Home" style={{fontSize:14,textDecoration:"none"}}/>
                </ListItem>
                </NavLink>

                <NavLink activeStyle={{textDecoration:"none",color:"teal"}} to="/Employee">
                <ListItem button key="Employee">
                            <ListItemIcon><PermIdentityIcon/></ListItemIcon>
                            <ListItemText primary="Employee" style={{fontSize:14,textDecoration:"none",color:"black"}}/>
                </ListItem>
                </NavLink>

                <NavLink activeStyle={{textDecoration:"none",color:"teal"}}  style={{textDecoration:"none"}}to="/Sales">
                <ListItem button key="Sales">
                            <ListItemIcon><MonetizationOnIcon/></ListItemIcon>
                            <ListItemText primary="Sales" style={{fontSize:14,textDecoration:"none"}}/>
                </ListItem>
                </NavLink>
                <NavLink activeStyle={{textDecoration:"none",color:"teal"}} style={{textDecoration:"none"}} to="/home" >
                <ListItem button key="About">
                            <ListItemIcon size="small" > <FlagIcon  /></ListItemIcon>
                            <ListItemText primary="About us" style={{fontSize:14,textDecoration:"none"}}/>
                </ListItem>
                </NavLink>
                
                <NavLink activeStyle={{textDecoration:"none",color:"teal"}}  style={{textDecoration:"none"}} to="/Stock" >
                <ListItem button key="Warehouse">
                            <ListItemIcon size="small" > <ShoppingCart /></ListItemIcon>
                            <ListItemText primary="Warehouse" style={{fontSize:14,textDecoration:"none"}}/>
                </ListItem>
                </NavLink>

                </List>
                <Divider />


               
            </Drawer>
        </div>
    )
}

export default Sidebar
