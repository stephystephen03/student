import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const BaseURL = "http://localhost:3333/students";
  let params = useParams();

  const [student, setStudent] = useState();
  // const [values, setValues] = useState({fullname:"test", mark1:14, mark2:41});

  useEffect(() => {
    console.log(params)
    axios.get(`${BaseURL}/${params.id}`).then((response) => {
      // debugger
      console.log(response.data)
      setStudent(response.data[0]);
    });
  }, []);
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleUpdate = (id) => {
    console.log("id", id)
    console.log("student", student)
    axios.put(`${BaseURL}/${id}`,student).then((response) => {
      console.log(response)
      navigate('/');
    });    
  }

  const handleDelete = (id) => {
    console.log("id", id)
    axios.delete(`${BaseURL}/${id}`).then((response) => {
      alert("deleted successfully")
      navigate('/');
    });    
  }
  
  return (
    <div>
      <h3>Edit Form</h3>
      {student !==undefined &&
        <div style={{ margin: 12 }} >
        <input type="text" name="fullname" placeholder="Enter Name" value={student.fullname} onChange={(e) => { handleChange(e); }} /> <br/>
        <input type="text" name="mark1" placeholder="Mark1" value={student.mark1} onChange={(e) => { handleChange(e); }} /> <br/>
        <input type="text" name="mark2" placeholder="Mark2" value={student.mark2} onChange={(e) => { handleChange(e); }} /> <br/>
                                  
        <button type="button" name="edit" onClick={()=>{handleUpdate(student.id)}}> Update </button>&nbsp;
        <button type="button" name="delete" onClick={()=>{handleDelete(student.id)}}> Delete</button>            
                
      
      </div>
      }
          
       
      
    </div>
  )
}

export default Edit