"use client"
import React, { useState } from "react";

function DisplayInput() {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div style={{ margin: '10px' }}>
        <div style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '30px' }}>
          {inputValue}
        </div>
        <input type="text" value={inputValue} onChange={handleChange} style={{ padding: '2px', width: '250px', fontSize: '16px' }} 
        />
      </div>
    );
  }
  
  export default DisplayInput;