import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import "./EmployeeTable.css";
import "./Button.css";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

let nameArrow;
let loginArrow;
let emailArrow;

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
      console.log("data: ", data[0]);
      nameArrow = <ArrowUp />;
      loginArrow = "";
      emailArrow = "";
      setSorted(true);
    } else {
      findEmployees(
        employees.sort((a, b) => (a.name.last > b.name.last ? -1 : 1))
      );
      nameArrow = <ArrowDown />;
      loginArrow = "";
      emailArrow = "";
      setSorted(false);
    }
  }

  function handleSortByEmail() {
    // sort array ascending or descending by username
    if (!sorted) {
      findEmployees(
        employees.sort((a, b) => (a.email > b.email ? 1 : -1))
      );
      emailArrow = <ArrowUp />;
      nameArrow = "";
      loginArrow = "";
      setSorted(true);
    } else {
      findEmployees(
        employees.sort((a, b) => (a.email > b.email ? -1 : 1))
      );
      emailArrow = <ArrowDown />;
      nameArrow = "";
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
      emailArrow = "";
      setSorted(true);
    } else {
      findEmployees(
        employees.sort((a, b) => (a.login.username > b.login.username ? -1 : 1))
      );
      loginArrow = <ArrowDown />;
      nameArrow = "";
      emailArrow = "";
      setSorted(false);
    }
  }

  const EmployeeRow = ({ name, email, picture, login, i }) => (
    < React.Fragment key={i} >
      <tr>
        <td>
          <img className="headshot" src={picture.medium} alt="headshot" />
        </td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{email}</td>
        <td>{login.username}</td>
      </tr>
    </React.Fragment>
  );


  return (
    <>
      <Container>
        <Table striped bordered hover responsive className="text-center">
          <thead>
            <tr>
              <td>Headshot</td>
              <td>First</td>
              <td><Button className="button" variant="info" onClick={handleSortByName}>Last{nameArrow}</Button></td>
              <td><Button className="button" variant="info" onClick={handleSortByEmail}>Email{emailArrow}</Button></td>
              <td><Button className="button" variant="info" onClick={handleSortByLogin}>Username{loginArrow}</Button></td>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((e) => !searchTerm || e.email.indexOf(searchTerm) !== -1)
              .map(({ picture, name, email, login }) => (
                <EmployeeRow
                  key={login.uuid}
                  picture={picture}
                  name={name}
                  email={email}
                  login={login}
                />
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EmployeeTable;
