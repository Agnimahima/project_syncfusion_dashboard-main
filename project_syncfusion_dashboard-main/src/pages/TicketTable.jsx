import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../api/api';

const TicketTable = () => {
  const [jiraBoards, setJiraBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    // Fetch the Jira boards from the API
    axios.get(`${base_url}/jiraboards`)
      .then(response => {
        setJiraBoards(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
    // Fetch the tickets from the API
    
  }, []);

  const handleBoardChange = (e) => {
    console.log(e.target.value)
    axios.get(`${base_url}/ticketswithJiraid?jira_id=${e.target.value}`)
      .then(response => {
        setTickets(response.data);
        console.log(tickets)
      })
      .catch(error => {
        console.log(tickets)
        console.error(error);
      });
    // Filter the tickets based on the selected board id
    // const filtered = tickets.filter(ticket => ticket.jiraId === e.target.value);

    // setFilteredTickets(filtered);
  };
  

  return (
    <div style={containerStyles}>
      <h2 style={titleStyles}>Choose Jira Board</h2>
      <select value={selectedBoard} onChange={handleBoardChange} style={dropdownStyles}>
        <option value="">Select Board</option>
        {jiraBoards.map((board) => (
    <option key={board.jiraId} value={board.jiraId}>
      {board.jiraId} - {board.boardName}
    </option>
  ))}
      </select>

      {tickets.length > 0 ? (
        <table style={tableStyles}>
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tickets        .map(ticket => (
              <tr key={ticket.ticketId}>
                <td>{ticket.ticketId}</td>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
};

export default TicketTable;

const containerStyles = {
  margin: '20px',
};

const titleStyles = {
  marginBottom: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};

const dropdownStyles = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

