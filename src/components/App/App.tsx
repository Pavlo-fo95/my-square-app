import React from 'react';
import StyledButtonComponent from '../Square/StyledButton';  
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledButtonComponent color="red" />
      <StyledButtonComponent color="blue" />
    </div>
  );
}

export default App;