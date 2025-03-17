import React, { useState } from 'react';
import Post from './components/Post';
import logo from './assets/logo_tiny_mark_secondary.svg';
import './styles/App.css';

function App() {
  const [formData, setFormData] = useState({
    description: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Uploadcare" />
        </div>
        <div className="header-buttons">
          <button className="header-button">Questions?</button>
          <button className="header-button">Save & exit</button>
        </div>
      </header>
      <div className="mainContent">
        <Post formData={formData} onFormChange={handleFormChange} />
      </div>
    </div>
  );
}

export default App;