import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import List from './List'

export default function Register() {
  const [userData, setUserData] = useState('');
  const [arr, setArr] = useState([]);
  
  const addData = () => {
    let listData = arr;
    listData.push(userData)
    setArr(listData)
  }

  console.log(arr, "array")

  return (
    <div className='container-fluid bg'>
      <div className="container">
        <div className="col-md-11 col-md-offset-1 pt-0">
          <h1 className="text-uppercase mt-20 line-height-1 head" style={{ textAlign: "center" }}>TODO <span > LIST</span></h1>
        </div>
      </div>

      <TextField id="standard-basic" label="Todo Items" className="todo" onChange={e => setUserData(e.target.value)} value={userData} />
      <Button variant="contained" className="add" size="small" color="primary" onClick={() => addData()}>Add</Button>
      <Button variant="contained" className="del" size="small" color="secondary">Delete All</Button>

        <div>
          <List data={arr} />
        </div>
      
    </div>
  )
}