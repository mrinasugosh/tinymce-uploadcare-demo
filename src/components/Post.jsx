import React, { useState } from 'react';
import TinyEditor from './TinyEditor';

const Post = ({ formData }) => {

  return (
    <>
      <div className="postForm">
        <div className="content-section">
          <h1 className="content-title">Create your description</h1>
          <p className="content-subtitle">Share what makes your place special.</p>
          <div className="textarea-container">
            <div className="editor-container">
              <TinyEditor
                value={formData.description || ''}
              />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="navigation">
        <div className="navigation-content">
          <button className="back-button">Back</button>
          <button 
            className="next-button" 
            disabled={!(formData.description || '').trim()}
          >
            Next
          </button>
        </div>
      </footer>
    </>
  );
};

export default Post;
