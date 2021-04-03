import { Form, Container } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
      <Container className="containerWidth">
        <Form.Control
        size="lg"
        className="text-center searchWidth form"
        type="text"
        placeholder="search first or last name"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value.toLowerCase())}
        />
    </Container>
  );
};

export default SearchBar;
