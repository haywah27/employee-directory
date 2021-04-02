import "./Header.css";
import React, { useState } from "react";


import { Jumbotron, Button } from "react-bootstrap";

function Header(){
  return (
  <>
    <Jumbotron className="text-center align-items-center">
      <h1>Employee Directory</h1>
      <p>
        Search for a specific employee by name in the search field.
        <br />
        OR
        <br />
        Filter employees by last name or username by clicking the buttons.
      </p>
    </Jumbotron>

  </>
  )
};

export default Header;
