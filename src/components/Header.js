import "./Header.css";
import { Jumbotron } from "react-bootstrap";

function Header(){
  return (
  <>
    <Jumbotron className="text-center align-items-center jumbo">
      <h1 className="title">Employee Directory</h1>
      <br />
      <p>
        Search for a specific employee by name
        <br />
        OR
        <br />
        Filter employees by clicking desired field
      </p>
    </Jumbotron>

  </>
  )
};

export default Header;
