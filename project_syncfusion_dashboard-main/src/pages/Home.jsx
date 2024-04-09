import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
         Chhatrapati Sahu Ji Maharaj University
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <img
          src="https://images.shiksha.com/mediadata/images/1496026037phpTFVfbZ.jpeg"
          alt="University Logo"
          style={{
            width: '30%',
            maxWidth: '300px',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            marginLeft: '20px',
            textAlign: 'left',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              marginTop: '0',
            }}
          >
            Name: Mahima Agnihotri
          </h2>
          <h3
            style={{
              marginTop: '10px',
              color: '#888',
            }}
          >
            Program: MSC Computer
          </h3>
          <h3
            style={{
              marginTop: '10px',
              color: '#888',
            }}
          >
            Final Project: ScrumBoard
          </h3>
        </div>
      </div>
      <div
        style={{
          marginTop: '40px',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.5',
          }}
        >
          This project aims to create a ScrumBoard for managing software projects. It includes features such as managing software, employees, Scrum Master, Jira ID, and Kanban board. The ScrumBoard provides a visual representation of the project's progress and allows efficient collaboration among team members.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
