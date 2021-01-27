import React from 'react'
import { Table } from 'react-bootstrap'

export default function Datatable({ val }) {

    const columns= val[0] && Object.keys(val[0])

    return (

        <Table striped bordered hover>
            <thead>
                <tr>{val[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {val.map((row) => (
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