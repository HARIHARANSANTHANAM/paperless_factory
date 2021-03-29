import React from 'react'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { Button, Grid, } from '@material-ui/core';
import {useTheme}from '@material-ui/styles';


function EmployeeTable(props) {

    const { data, setData } = props;
    const [emp, setEmp] = React.useState(data);
    const columns = emp[0] && Object.keys(emp[0]);

    React.useEffect(() => {
        $(document).ready(function () {
            $('#myTable').DataTable();
        });
        $("tr:odd").css("background-color", "transparent");
        $("tr:even").css
        ("background-color","transparent");

        $("thead").css("background-color","black");
        
        $("thead").css("color","white");
        
        $("dataTables_info").css("color","white");
    })

    const handleDelete = (employee) => {
        console.log(employee)
        if (window.confirm("Do you Want to Delete This Employee")) {
            const person = prompt(`Please Enter the Name ${employee.Name} to Delete`)
            if (person == employee.Name) {
                alert("Employee is Deleted Successfully....");
            }
        }
        let temp = emp;
        const original = temp.filter((v) => { return v.ID != employee.ID });
        console.log(original)
        setData(original)
    }

    const theme=useTheme();

    return (
        <>
            {
                emp ?
                    <>
                        <h2 style={{color:"gray",borderBottom:"2px solid rgba(0,0,0,.1)",padding:2}}>Employee Details</h2>
                        <table  cellPadding={0} cellSpacing={0} id="myTable" style={{marginTop:"20px"}}>
                            <thead>
                                <tr>{emp[0] && columns.map((heading) => <th>{heading}</th>)}
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    emp.map(row => <tr >
                                        {
                                            columns.map(column => <td style={{ textAlign: "center" }}>{row[column]}</td>)
                                        }
                                        <td><center><Button variant="contained" color="primary">Edit</Button></center></td>
                                        <td><center><Button color="secondary" variant="contained" style={{ textAlign: "center" }} onClick={() => { handleDelete(row) }}>Delete</Button></center></td>
                                    </tr>)

                                }
                            </tbody>
                        </table></>
                    : <center><h6>Result Not Found</h6></center>
            }
        </>
    )
}

export default EmployeeTable
