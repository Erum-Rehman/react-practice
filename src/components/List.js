import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core'

const List = ({ data, setData }) => {
    const [userInput, setUserInput] = useState('')

    const editData = (index,value) => {
        data[index]["editValue"] = true;
        setData(data)
        setUserInput(value)
    }

const updateArr = (e) => {
    console.log(e.target.value, "e.target.value")
    setUserInput(e.target.value) 
}
const update = (e,index) => {
    data[index]["value"]= userInput;
    data[index]["editValue"]= false;
    setData([...data])
    console.log(data)
}
const removeData = (index,value) => {
    data.splice(index,1)
    setData([...data])
}
    return (
        <>
            <div className="item">
                <table id="list">
                    <tbody>
                    {data.map((val, index) => (
                        <tr key={index}>
                        {val.editValue ? 
                            <TextField id="standard-basic" className="ext" onChange ={e => updateArr(e,index)} value={userInput} />
                            : <td className="items">{val.value}</td>}
                        {val.editValue ?
                            <td><Button variant="contained" className="edit" size="small" color="primary" onClick={(e) => update(e,index)}>Update</Button></td>
                            :<td><Button variant="contained" className="remove" size="small" color="primary" onClick={() => editData(index,val.value)}>Edit</Button></td>
                            }
                        <td><Button variant="contained" className="remove" size="small" color="secondary" onClick={() => removeData(index,val.value)}>Remove</Button></td>
                    </tr>
                    )
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default List;