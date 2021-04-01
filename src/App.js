import React from "react";
import API from "../src/utils/API"
import { Table } from 'react-bootstrap'
function App () {
    console.log(API)
    return (
        
        <>
            <Table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>DOB</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hay</td>
                        <td>Wah</td>
                        <td>02/15/2020</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default App;

