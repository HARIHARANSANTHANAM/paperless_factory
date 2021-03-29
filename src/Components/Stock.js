import React from 'react'
import {Fade} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import StockTab from './StockTab'

function Stock() {
    return (
        <>
             <Fade in={true} style={{marginTop:"10vh",minHeight:"90vh",padding:"0px 20px",width:"100%"}}>
        <div>
           
        <h2 style={{borderBottom:"2px solid rgba(0,0,0,.1)",padding:2}}><ShoppingCart/> Stock Management</h2>
        <StockTab/>
          </div>
          </Fade>
           
        </>
    )
}

export default Stock
