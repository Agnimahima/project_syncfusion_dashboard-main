import React, { useState } from 'react';

import axios from 'axios';
import { base_url } from '../../api/api';

const AddSoftwareForm = () => {
  const [formData, setFormData] = useState({
    softName: '',
    client: '',
    company: '',
    location: '',
    projectManager: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to post the data
    // Implement your logic here to handle form submission
    axios
    .post(`${base_url}/softwares`, formData)
    .then((reponse)=>{
        setFormData({
            softName: '',
            client: '',
            company: '',
            location: '',
            projectManager: ''
          });
    })
    .catch((error) => {
        // Handle error
        console.log(formData)
        console.error(error);
      });
    // Reset the form
    
  };

  return (
    <div style={formContainerStyles}>
      <h2 style={titleStyles}>Add Software</h2>
      <form style={formStyles} onSubmit={handleSubmit}>
        <div style={formGroupStyles}>
          <label htmlFor="softName" style={labelStyles}>
            Software Name:
          </label>
          <input
            type="text"
            id="softName"
            name="softName"
            value={formData.softName}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>

        <div style={formGroupStyles}>
          <label htmlFor="client" style={labelStyles}>
            Client:
          </label>
          <input
            type="text"
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>

        <div style={formGroupStyles}>
          <label htmlFor="company" style={labelStyles}>
            Company:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>

        <div style={formGroupStyles}>
          <label htmlFor="location" style={labelStyles}>
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>

       

        <div style={formGroupStyles}>
          <label htmlFor="projectManager" style={labelStyles}>
            Project Manager:
          </label>
          <input
            type="text"
            id="projectManager"
            name="projectManager"
            value={formData.projectManager}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>

        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSoftwareForm;

const formContainerStyles = {
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

const formStyles = {
  width: '400px',
  padding: '20px',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff'
};

const formGroupStyles = {
  marginBottom: '20px'
};

const labelStyles = {
  marginBottom: '10px',
  fontSize: '16px',
  color: '#555'
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyles = {
  marginTop: '20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  border: 'none',
  fontSize: '16px'
};
