import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import "./EmployeeTable.css";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

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
    // sort array ascending or descending by last name
    if (!sorted) {
      findEmployees(
        employees.sort((a, b) => (a.name.last > b.name.last ? 1 : -1))
      );
      nameArrow = <ArrowUp />;
      loginArrow = "";
      setSorted(true);
    } else {
      findEmployees(
        employees.sort((a, b) => (a.name.last > b.name.last ? -1 : 1))
      );
      nameArrow = <ArrowDown />;
      loginArrow = "";
      setSorted(false);
    }
  }

  function handleSortByLogin() {
    // sort array ascending or descending by username
    if (!sorted) {
      findEmployees(
        employees.sort((a, b) => (a.login.username > b.login.username ? 1 : -1))
      );
      loginArrow = <ArrowUp />;
      nameArrow = "";
      setSorted(true);
    } else {
      findEmployees(
        employees.sort((a, b) => (a.login.username > b.login.username ? -1 : 1))
      );
      loginArrow = <ArrowDown />;
      nameArrow = "";
      setSorted(false);
    }
  }

  const EmployeeRow = ({ name, email, picture, login, i }) => (
    <tr key={i}>
      <td>
        <img className="headshot" src={picture.medium} alt="headshot" />
      </td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
      <td>{login.username}</td>
    </tr>
  );


  return (
    <>
      <Container>
        <Table striped bordered hover responsive className="text-center">
          <thead>
            <tr>
              <td>Headshot</td>
              <td>First</td>
              <td><Button variant="info" onClick={handleSortByName}>Last{nameArrow}</Button></td>
              <td>Email</td>
              <td><Button variant="info" onClick={handleSortByLogin}>Username{loginArrow}</Button></td>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((e) => !searchTerm || e.email.indexOf(searchTerm) !== -1)
              .map(({ picture, name, email, login }, i) => (
                <EmployeeRow
                  picture={picture}
                  name={name}
                  email={email}
                  login={login}
                  i={i}
                />
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EmployeeTable;
