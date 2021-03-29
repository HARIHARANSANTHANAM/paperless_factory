import React from 'react'
import { Search } from '@material-ui/icons';
import { useTheme, TextField } from '@material-ui/core';
//import {useHistory,Link} from 'react-router-dom';

function Searchbar(props) {
    const { setword, mode } = props;
    const [searchword, setsearchword] = React.useState("")
    const theme = useTheme();

    return (
        <form
            style={{ display: "flex", alignItems: "center", background: "rgba(0,0,0,.1)", padding: 5, borderRadius: 5,width:280 }}
            onSubmit={(e)=>{e.preventDefault()}}
        >

            {/* <Link to={`/Result/${searchword}`}> */}
                <Search />
            {/* </Link> */}

            <TextField
                type="text"
                placeholder={props.placeholder}
                onChange={(e) => { console.log(e.target.value); setsearchword(e.target.value) }}
                value={searchword}
                color={mode ? "black" : "white"}
                inputProps={{ style: { background: "rgba(0,0,0,.001)", border: "none", outline: "none", padding: 7, fontSize: 15,width:280 } }}
            />
        </form>
    )
}

export default Searchbar
