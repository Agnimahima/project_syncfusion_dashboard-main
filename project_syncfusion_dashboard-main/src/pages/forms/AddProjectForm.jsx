import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ButtonComponent as Button } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent as Input } from '@syncfusion/ej2-react-inputs';

import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { base_url } from '../../api/api';

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    boardName: '',
    startDate: new Date(),
    endDate: new Date()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStartDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, startDate: date }));
  };

  const handleEndDateChange = (date) => {

    setFormData((prevData) => ({ ...prevData, endDate: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.endDate <= formData.startDate) {
      alert("End date should be after start date.");
      return;
    }
    
    // Make API call to post the data
    axios
      .post(`${base_url}/jiraboards`, formData)
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Reset the form
        setFormData({
          projectName: '',
          boardName: '',
          startDate: new Date(),
          endDate: new Date()
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
      <h2 style={titleStyles}>Add Project</h2>
      <form style={formStyles} onSubmit={handleSubmit}>
        <div>
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
        </div>
        <br />

        <div>
          <label style={labelStyles}>
            Board Name
            <Input
              type="text"
              name="boardName"
              value={formData.boardName}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>
        <br />

        <div>
          <label style={labelStyles}>
            Start Date
            <DatePicker
              selected={formData.startDate}
              onChange={handleStartDateChange}
              style={inputStyles}
            />
          </label>
        </div>
        <br />

        <div>
          <label style={labelStyles}>
            End Date
            <DatePicker
              selected={formData.endDate}
              onChange={handleEndDateChange}
              style={inputStyles}
            />
          </label>
        </div>
        <br />

        <div>
          <Button type="submit" style={buttonStyles}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;

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
