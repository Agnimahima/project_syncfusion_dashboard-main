import React, { useState } from 'react';
import { ButtonComponent as Button } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent as Input } from '@syncfusion/ej2-react-inputs';

import axios from 'axios';
import { base_url } from '../../api/api';

const AddScrumMaster = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    projectName: '',
    status: '',
    weeks: '',
    location: '',
    customerId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    // Make API call to post the data
    axios
      .post(`${base_url}/scrummasters`, formData)
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Reset the form
        setFormData({
          username: '',
          password: '',
          name: '',
          projectName: '',
          status: '',
          weeks: '',
          location: '',
          customerId: ''
        });
      })
      .catch((error) => {
        // Handle error
        console.log(formData)
        console.error(error);
      });
  };

  return (
    <div style={formContainerStyles}>
      <h2 style={titleStyles}>Add Scrum Master</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <label style={labelStyles}>
          Username
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Password
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Name
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Project Name
          <Input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Status
          <Input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Weeks
          <Input
            type="text"
            name="weeks"
            value={formData.weeks}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Location
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <label style={labelStyles}>
          Customer ID
          <Input
            type="text"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            style={inputStyles}
          />
        </label>
        <br />

        <Button type="submit" style={buttonStyles}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddScrumMaster;

const formContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px'
};

const titleStyles = {
  marginBottom: '20px',
  fontSize: '24px',
  color: '#333'
};

const formStyles = {
  width: '500px',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff'
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
