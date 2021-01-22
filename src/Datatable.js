import React from 'react'
import { Table } from 'react-bootstrap'

export default function Datatable({ val }) {
    const columns= val.data[0] && Object.keys(val.data[0])
    
    return(
        
        <Table striped bordered hover>
            <thead>
                <tr>{val.data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {val.data.map((row) => (
                    <tr>
                        {columns.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        
    )
}