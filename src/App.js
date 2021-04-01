import React, { useEffect, useState  } from 'react';
import EmployeeTable from "./components/EmployeeTable"
import Header from "./components/Header"

function App() {
  
  return (
    <div>
        <Header />
      <EmployeeTable />
    </div>
  );
};
  
export default App;

