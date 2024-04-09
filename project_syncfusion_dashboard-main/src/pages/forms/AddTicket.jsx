import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ButtonComponent as Button } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent as Input } from '@syncfusion/ej2-react-inputs';

import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { base_url } from '../../api/api';

const AddTicketForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    jiraId: '',
    description: ''
  });
  const [jiraBoards, setJiraBoards] = useState([]);

  useEffect(() => {
    // Fetch jiraBoards data from API
    axios
      .get(`${base_url}/jiraboards`)
      .then((response) => {
        // Set the fetched data to jiraBoards state
        setJiraBoards(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call to post the data
    axios
      .post(`${base_url}/tickets`, formData)
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Reset the form
        setFormData({
          title: '',
          jiraId: '',
          description: ''
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
      <h2 style={titleStyles}>Add Ticket</h2>
      <form style={formStyles} onSubmit={handleSubmit}>
        <div>
          <label style={labelStyles}>
            Jira Board
            <select
  name="jiraId"
  value={formData.jiraId}
  onChange={handleChange}
  style={inputStyles}
>
  <option value="">Select Jira Board</option>
  {jiraBoards.map((board) => (
    <option key={board.jiraId} value={board.jiraId}>
      {board.jiraId} - {board.boardName}
    </option>
  ))}
</select>
          </label>
        </div>
        <br />

        <div>
          <label style={labelStyles}>
            Title
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>
        <br />
        <div>
          <label style={labelStyles}>
            Desciption
            <Input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
        </div>
        <div>
          <Button type="submit" style={buttonStyles}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTicketForm;

const formContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
};

const titleStyles = {
  marginBottom: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};

const formStyles = {
  width: '400px',
  padding: '20px',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const labelStyles = {
  marginBottom: '10px',
  fontSize: '16px',
  color: '#555',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyles = {
  marginTop: '20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  border: 'none',
  fontSize: '16px',
};
