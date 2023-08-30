import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Edit from "./Edit";

const AddListingStudents = () => {
  const BaseURL = "http://localhost:3333/students";
  const [showform, setShowForm] = useState(false);
  const [values, setValues] = useState();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`${BaseURL}`).then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setShowForm(false);
    axios.post(`${BaseURL}`, values).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button type="button" onClick={() => { setShowForm(true);}}>Add Student</button>

      {showform && (
        <div style={{ margin: 12 }}>
          <br />
          <input type="text" name="fullname" placeholder="Enter Name" onChange={(e) => { handleChange(e); }} /> <br />
          <input type="text" name="mark1" placeholder="Mark1" onChange={(e) => { handleChange(e); }} /> <br />
          <input type="text" name="mark2" placeholder="Mark2" onChange={(e) => { handleChange(e); }} /> <br />
          <br />
          <button type="submit" onClick={() => handleSubmit("submit")}> Submit </button>
        </div>
      )}

      <div>
        {students.length !== 0 && (
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Mark1</th>
              <th>Mark2</th>
              <th>Actions</th>
            </tr>
            {students.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.fullname}</td>
                  <td>{student.mark1}</td>
                  <td>{student.mark2}</td>
                  <td>
                    <Link to={"/edit/"+student.id}>
                        <button type="button" name="edit"> Edit</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default AddListingStudents;
