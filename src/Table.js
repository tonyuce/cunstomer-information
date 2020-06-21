import React from 'react';
import './Table.css';

const Table = props => {
    const columns = ['First Name','Last Name', 'Age','Visits','Status', 'Profile Progress'];
    const data = [["customer",	13,	99,	"single",	19]];
    return ( <table border="1">
                <thead>
                    {columns.map(column => (
                        <th>{column}</th>
                    ))}
                </thead>
                <tbody >
                    {data.map((row, i) => {
                        return (
                            <tr>
                            {row.map(cell => {
                                return <td >{cell}</td>
                            })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )

};
export default Table;   