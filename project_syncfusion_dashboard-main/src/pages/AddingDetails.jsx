import React, { useState } from 'react';
import AddEmployeeForm from './forms/AddEmployeeForm';
import AddScrumMaster from './forms/AddScrumMaster';
import AddProjectForm from './forms/AddProjectForm';
import AddSoftwareForm from './forms/AddSoftwareForm';

const AddingDetails = () => {
  const [selectedForm, setSelectedForm] = useState('');

  const handleChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'addEmployee':
        return <AddEmployeeForm />;
      case 'addScrumMaster':
        return <AddScrumMaster />;
      case 'addProjectDetails':
        return <AddProjectForm />;
      case 'addSoftware':
        return <AddSoftwareForm/>  
      default:
        return null;
    }
  };

  return (
    <div style={containerStyles}>
      <h2 style={titleStyles}>Add Details</h2>
      <select value={selectedForm} onChange={handleChange} style={selectStyles}>
        <option value="">Select Form</option>
        <option value="addEmployee">Add Employee</option>
        <option value="addScrumMaster">Add Scrum Masters</option>
        <option value="addProjectDetails">Add Project Details</option>
        <option value="addSoftware">Add Software</option>
      </select>
      {renderForm()}
    </div>
  );
};

export default AddingDetails;

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px'
};



const titleStyles = {
  marginBottom: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333'
};

const selectStyles = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
  width: '300px'
};
