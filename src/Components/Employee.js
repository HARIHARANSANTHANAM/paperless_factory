import React,{useState} from 'react'
import clsx from 'clsx';
import {Container,Fade } from '@material-ui/core';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from './EmployeeForm';

const emp=[
    {
        "ID":"1001",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Manager",
        "Salary":"50000"
    },
    
    {
        "ID":"1002",
        "Name":"Hariharan",
        "Email":"hari@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"12/10/1998",
        "Designation":"Assistant Manager",
        "Salary":"30000"
    },
    
    {
        "ID":"1003",
        "Name":"Reshma",
        "Email":"reshmadhandapani@gmail.com",
        "Gender":"Female",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1996",
        "Designation":"Supervisor",
        "Salary":"20000"
    },
    {
        "ID":"1004",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Accountant",
        "Salary":"10000"
    },
    {
        "ID":"1005",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Accountant",
        "Salary":"10000"
    },
    {
        "ID":"1006",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Accountant",
        "Salary":"10000"
    },
    {
        "ID":"1007",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Manager",
        "Salary":"50000"
    },
    
    {
        "ID":"1008",
        "Name":"Hariharan",
        "Email":"hari0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"12/10/1998",
        "Designation":"Assistant Manager",
        "Salary":"30000"
    },
    
    {
        "ID":"1009",
        "Name":"Reshma",
        "Email":"reshmadhandapani@gmail.com",
        "Gender":"Female",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1996",
        "Designation":"Supervisor",
        "Salary":"20000"
    },
    {
        "ID":"1010",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Accountant",
        "Salary":"10000"
    },
    {
        "ID":"1011",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Accountant",
        "Salary":"10000"
    },
    {
        "ID":"1012",
        "Name":"Dharani",
        "Email":"dharani0320@gmail.com",
        "Gender":"Male",
        "DOJ":"29/03/2019",
        "DOB":"21/02/1998",
        "Designation":"Accountant",
        "Salary":"10000"
    }
]



   
function Employee(props) {
 
    
const [Query, setQuery] =useState("");


const [data,setData]=React.useState(emp);
React.useEffect(()=>{
    console.log(data);
    setData(data)
},[data])

const search=(rows)=>{
    const column=rows[0] && Object.keys(rows[0]);
    return rows.filter((row)=> column.some(column=> row[column].toLowerCase().indexOf(Query.toLowerCase())>-1));
}
    const {open}=props;
    return (
        <Fade in={true} style={{marginTop:"10vh",minHeight:"90vh",padding:"0px 20px",width:"100%"}}>
        <Container>
            <h2>Employee Management</h2>
            <EmployeeForm data={data} />
            <EmployeeTable data={data} setData={setData}/>       
          </Container>
          </Fade>
    )
}

export default Employee
