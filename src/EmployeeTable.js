import React, { useEffect, useState  } from 'react';
import { Table } from "react-bootstrap";


const EmployeeTable = ({ searchTerm }) => {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100")
        .then((res) => res.json())
        .then((res) => {
            setEmployees(res.results);
        });
    }, []);

    return (
        
        <>
            <Table striped bordered hover responsive className="text-center">
                <thead >
                    <tr>
                        <td>Profile Picture</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {employees
                        .filter((e) => !searchTerm || e.name.first.indexOf(searchTerm) !== -1)
                        .map(({ picture, name, email }, i) => (
                            <EmployeeRow picture={picture} name={name} email={email}  i={i} />
                    ))}
                </tbody>
            </Table>
        </>
    )
}


const EmployeeRow = ({ name, email, picture, i }) => (
    <tr key={i}>
      <td><img src={picture.thumbnail} alt="thumbnail headshot"/></td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
      
      
    </tr>
  );
  
export default EmployeeTable;

