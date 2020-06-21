import React from 'react';
import './Table.css';

const Table = props => {
    const {columns, data, showAddress} = props;
    return ( <div className="Table-container">
                {(data.length === 0) ? 
                    "No Data Available"
                :
                    <table border="1" cellPadding="10" className="Table">
                        <thead>
                            <tr>
                                {columns.map(column => (
                                    <th key={`head_${column}`}>{column}</th>
                                ))}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {data.map((row, i) => {
                                return (
                                    <tr key={`row_${i}`}>
                                        <td >{row.first_name}</td>
                                        <td >{row.last_name}</td>
                                        <td >{row.age}</td>
                                        <td >{(row.status === 1) ? 'Active' : 'Inactive'}</td>
                                        <td className="Show-address" data-key={row.id} onClick={showAddress}>Show Address</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>  
    )

};
export default Table;   