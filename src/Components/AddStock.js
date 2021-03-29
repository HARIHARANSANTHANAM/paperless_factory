import React,{useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Button, Container, FormControl, Radio, ListItemAvatar, TextField, useTheme, Grid, FormLabel, RadioGroup, FormControlLabel, Box } from '@material-ui/core';
import { Cancel, SaveOutlined } from '@material-ui/icons';
function AddStock(props) {

    const { data } = props;
    const [emp, setEmp] = React.useState(data);
    const [Name, setName] = useState("")
    const [DOJ, setDOJ] = useState("")
    const [Email, setEmail] = useState("")
    const [DOB, setDOB] = useState("")
    const [Gender, setGender] = useState("")
    const [Designation, setDesignation] = useState("")


    const handleName=(e)=>{
        setName(e.target.value);
    }
 
    const handleDOJ=(e)=>{
        setDOJ(e.target.value);
    }
    const handleDOB=(e)=>{
        setDOB(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleGender=(e)=>{
        setGender(e.target.value);
    }
    const handleDesignation=(e)=>{
        setDesignation(e.target.value);
    }
 

   const handleSubmit=()=>{
       alert(Email)
       console.log(Email+Designation);
   }


   const fabric_type=["AIRTEX","LYCRA","DURBY","JERSEY"]

    return (
        <div>
            <form onSubmit={()=>handleSubmit()}>
            <Container style={{  background: "rgba(0,0,0,.1)", borderRadius: "10px" }}>
                <center>
                                    <FormControl  style={{ padding: "20px 0px" }}>
                                    <Autocomplete
                                            id="combo-box-demo"
                                            options={fabric_type}
                                            getOptionLabel={(option) => option}
                                            style={{ marginBottom: "20px", width: "600px" }}
                                            renderInput={(params) => <TextField {...params} label="Fabric Type" variant="outlined" />}
                                            onChange={(e)=>handleDesignation(e)}
                                        />
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            type="color"
                                            style={{ marginBottom: "20px", width: "600px" }}
                                            label="Choose Fabric Color"
                                            InputLabelProps={{
                                                shrink: true,
                                              }}
                                              onChange={(e)=>handleDOJ(e)}
                                              required
                                        />
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            type="number"
                                            style={{ marginBottom: "20px", width: "600px" }}
                                            label="Weight in KG"
                                            onChange={(e)=>handleEmail(e)}
                                            required
                                        />
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            type="number"
                                            style={{ marginBottom: "20px", width: "600px" }}
                                            label="Cost/KG"
                                            onChange={(e)=>handleDOB(e)}
                                            required
                                        />
                                    </FormControl>

                                {/* <div style={{margin:"20px 20px"}}>
                                    <FormControl fullwidth value={Gender}  required>

                                        <FormLabel>Gender</FormLabel>
                                        <RadioGroup row onChange={(e)=>handleGender(e)}>
                                            <FormControlLabel value="Male"
                                                control={<Radio />}
                                                label="Male">
                                            </FormControlLabel>
                                            <FormControlLabel value="Female"
                                                control={<Radio />}
                                                label="Female">
                                            </FormControlLabel>
                                            <FormControlLabel value="Other"
                                                control={<Radio />}
                                                label="Other">
                                            </FormControlLabel>
                                        </RadioGroup>

                                      
                                        
                                    </FormControl>
                                </div> */}
                             
                            <Box display="flex" justifyContent="center">
                                        <Button
                                        startIcon={<SaveOutlined/>}
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        style={{ margin: "20px", width: "200px" }}
                                        onClick={(e)=>handleSubmit()}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                        startIcon={<Cancel/>}
                                        color="secondary"
                                        variant="contained"
                                        size="large"
                                        style={{ margin: "20px", width: "200px" }}
                                        >
                                            Cancel
                                        </Button>
                                        </Box>
                                        </center>

                        </Container>
                        </form>
        </div>
    )
}

export default AddStock
