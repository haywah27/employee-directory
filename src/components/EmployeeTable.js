import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([]);
  const [ sorted, setSorted] = useState(false);
  const [ data, findEmployees ] = useState(employees);

  function handleSortByName() {
    // sort array ascending or descending by first name
    if (!sorted) {
        findEmployees(employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
        setSorted(true);
    } else {
        findEmployees(employees.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
        setSorted(false);
    }
}

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
        <thead>
          <tr>
            <td>Headshot</td>
            <td><button onClick={handleSortByName}>First Name</button></td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {employees
            .filter(
              (e) => !searchTerm || e.name.last.indexOf(searchTerm) !== -1
            )
            .map(({ picture, name, email }, i) => (
              <EmployeeRow picture={picture} name={name} email={email} i={i} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

const EmployeeRow = ({ name, email, picture, i }) => (
  <tr key={i}>
    <td>
      <img src={picture.medium} alt="headshot" />
    </td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{email}</td>
  </tr>
);

export default EmployeeTable;
