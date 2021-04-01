import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
let nameArrow;
let loginArrow;

const EmployeeTable = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [data, findEmployees] = useState(employees);


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100&nat=us")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res.results);
      });
  }, []);

  function handleSortByName() {
    // sort array ascending or descending by first name
    if (!sorted) {
      findEmployees(
        employees.sort((a, b) => (a.name.last > b.name.last ? 1 : -1)),
      );
      nameArrow = <ArrowUp />
      loginArrow = "";
      setSorted(true);
    } else {
      findEmployees(
        employees.sort((a, b) => (a.name.last > b.name.last ? -1 : 1))
      );
      nameArrow = <ArrowDown />
      loginArrow = "";
      setSorted(false);
    }
  }

  function handleSortByLogin() {
    // sort array ascending or descending by first name
    if (!sorted) {
      findEmployees(
        employees.sort((a, b) => (a.login.username > b.login.username ? 1 : -1)),
      );
      loginArrow = <ArrowUp />
      nameArrow = "";
      setSorted(true);
      
    } else {
      findEmployees(
        employees.sort((a, b) => (a.login.username > b.login.username ? -1 : 1))
      );
      loginArrow = <ArrowDown />
      nameArrow = ""
      setSorted(false);
    }
  }

  return (
    <>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <td>Headshot</td>
            <td>First Name</td>
            <td><button onClick={handleSortByName}>Last Name{nameArrow}</button></td>
            <td>Email</td>
            <td><button onClick={handleSortByLogin}>Username{loginArrow}</button></td>
          </tr>
        </thead>
        <tbody>
          {employees
            .filter(
              (e) => !searchTerm || e.email.indexOf(searchTerm) !== -1
            )
            .map(({ picture, name, email, login }, i) => (
              <EmployeeRow picture={picture} name={name} email={email} login={login} i={i} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

const EmployeeRow = ({ name, email, picture, login, i }) => (
  <tr key={i}>
    <td>
      <img src={picture.medium} alt="headshot" />
    </td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{email}</td>
    <td>{login.username}</td>
  </tr>
);

export default EmployeeTable;
