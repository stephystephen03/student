import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const BaseURL = "http://localhost:3333/students";
  let params = useParams();

  const [student, setStudent] = useState([]);
  const [values, setValues] = useState({fullname:"test", mark1:14, mark2:41});

  useEffect(() => {
    console.log(params)
    axios.get(`${BaseURL}/${params.id}`).then((response) => {
      setStudent(response.data);
    });
  }, []);
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdate = (id) => {
    console.log("id", id)
    axios.put(`${BaseURL}/${id}`,values).then((response) => {
      console.log(response)
    });    
  }

  const handleDelete = (id) => {
    console.log("id", id)
    axios.delete(`${BaseURL}/${id}`).then((response) => {
      alert("deleted successfully")
    });    
  }
  
  return (
    <div>
      <h3>Edit Form</h3>
        {student.map((student, index) => {
              return (
          <div style={{ margin: 12 }} key={index}>
            <input type="text" name="fullname" placeholder="Enter Name" value={student.fullname}  onChange={(e) => { handleChange(e); }} /> <br/>
            <input type="text" name="mark1" placeholder="Mark1" value={student.mark1} onChange={(e) => { handleChange(e); }} /> <br/>
            <input type="text" name="mark2" placeholder="Mark2" value={student.mark2} onChange={(e) => { handleChange(e); }} /> <br/>
                                      
            <button type="button" name="edit" onClick={()=>{handleUpdate(student.id)}}> Update </button>&nbsp;
            <button type="button" name="delete" onClick={()=>{handleDelete(student.id)}}> Delete</button>             
                    
          
          </div>
        )})}
      
    </div>
  )
}

export default Edit