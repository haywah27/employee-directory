import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <EmployeeTable searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
