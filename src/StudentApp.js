import React from "react";
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Edit from "./components/Edit";
import AddListingStudents from "./components/AddListingStudents";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddListingStudents/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
