import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Search by First or Last Name"
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
