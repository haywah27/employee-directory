import { Form, Container } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
      <Container className="containerWidth">
        <Form.Control
        className="text-center searchWidth"
        type="text"
        placeholder="Search by First or Last Name"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value.toLowerCase())}
        />
    </Container>
  );
};

export default SearchBar;
