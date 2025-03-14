import React, { useState } from 'react';
import axios from 'axios';
function Create() {
    const [task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
          location.reload()
        }
        )
        .catch(err => console.log(err))
    }
  return (
    <div className="create_formb">
      <input type="text" className="create_form" placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;
