import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import List from './List'
import { Fire } from './Firebase'

export default function Register() {
  const [userData, setUserData] = useState('');
  const [arr, setArr] = useState([]);

  const addData = () => {
    arr.push({ value: userData, editValue: false })
    setArr([...arr])

    //Save data to DB
    Fire.collection("data").add({
      todo: userData
    })
      .then(() => {
        console.log("Todos has been saved successfully")
      })
      .catch((error) => {
        console.log(error.message);
      });

    setUserData('')
  }

  const delData = () => {
    setArr([])
  }

  return (
    <div className='container-fluid bg'>
      <div className="container">
        <div className="col-md-11 col-md-offset-1 pt-0">
          <h1 className="text-uppercase mt-20 line-height-1 head" style={{ textAlign: "center" }}>TODO <span > LIST</span></h1>
        </div>
      </div>
      <div className="todo">
        <TextField id="standard-basic" label="Todo Items" onChange={e => setUserData(e.target.value)} value={userData} />

        <Button variant="contained" className="add" size="small" color="primary"  onClick={() => addData()} >Add Todo</Button>

        <Button variant="contained" className="del" size="small" color="secondary" onClick={() => delData()}>Delete All</Button>
      </div>
      <div className="List">
        <List data={arr} setData={setArr} />
      </div>

    </div>
  )
}