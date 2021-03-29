import React from 'react'
import {Container,Fade } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Factory from '../Assets/Images/FactoryPic.jpeg';
import WareHouse from '../Assets/Images/WareHousePic.jpeg';
import { Store } from '@material-ui/icons';

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
function Home(props) {
    
    
    const classes = useStyles();
    const{open}=props;

    return (

        <Fade in={true} style={{marginTop:"10vh",minHeight:"90vh",padding:"0px 20px"}}>
        <div>
           
        <h2 style={{borderBottom:"2px solid rgba(0,0,0,.1)",padding:2}}><Store/>SHREE COTTON FACTORY</h2>
           <div style={{display:"flex",justifyContent:"space-between",height:"300",width:"100%",overflow:"hidden",flexWrap:"warp"}}>
           <img src={Factory}  alt="" width="400"  height="300" style={{objectFit:"cover"}}/>
           <img src='../Assets/Images/Thread.jpeg'  alt="" width="400"  height="300" style={{objectFit:"cover"}}/>
           <img src='../Assets/Images/WareHousePic.jpeg'  alt="" width="400" height="300"/>
           </div>
           <p style={{fontSize:18}}>Welcome to SHREE COTTON FACTORYllc, your number one source for all things [product]. We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1], [store characteristic 2], [store characteristic 3].
Founded in [year] by [founder name], ABC Cotton factory,llc has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to start their own business.
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
          </div>
          </Fade>
       
    )
}

export default Home
