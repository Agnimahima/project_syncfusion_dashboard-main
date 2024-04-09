import React, { useState } from 'react';
import { ButtonComponent as Button } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent as Input } from '@syncfusion/ej2-react-inputs';

import axios from 'axios';
import { base_url } from '../../api/api';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          designation: '',
          city: '',
          state: '',
          pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (formData.mobile.length !== 10 || formData.pincode.length !== 6) {
      alert('Phone number must be 10 digits and pincode must be 6 digits.');
      return;
    }

    // Make API call to post the data
    axios
      .post(`${base_url}/employees`, formData)
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Reset the form
        setFormData({
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          designation: '',
          city: '',
          state: '',
          pincode: ''
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
      <h2 style={titleStyles}>Add New Employee</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={formRowStyles}>
          <label style={labelStyles}>
            First Name
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>

          <label style={labelStyles}>
            Last Name
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>

        <div style={formRowStyles}>
          <label style={labelStyles}>
            Phone
            <Input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>

          <label style={labelStyles}>
            Email
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>

        <div style={formRowStyles}>
          <label style={labelStyles}>
            Designation
            <Input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>

          <label style={labelStyles}>
            City
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>

        <div style={formRowStyles}>
          <label style={labelStyles}>
            State
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>

          <label style={labelStyles}>
            Pincode
            <Input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>

        <Button type="submit" style={buttonStyles}>
          Add Employee
        </Button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;

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

const formRowStyles = {
  display: 'flex',
  marginBottom: '20px'
};

const labelStyles = {
  flex: '1',
  marginRight: '20px',
  fontSize: '16px',
  color: '#555'
};

const inputStyles = {
  flex: '1',
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
