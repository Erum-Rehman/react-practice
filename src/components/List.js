import React from 'react';
import { Button } from '@material-ui/core'

const List = ({ data }) => {
    console.log({data})
    return (
        <>
            <div className="item">
                <table id="list">
                    <tbody>
                    {data.length ? data.map((val, index) => (
                        <tr key={index}>
                        <td>{val}</td>
                        <td><Button variant="contained" className="add" size="small" color="primary">Edit</Button></td>
                        <td><Button variant="contained" className="del" size="small" color="secondary">Delete</Button></td>
                    </tr>
                    )
                    ) : null}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default List;