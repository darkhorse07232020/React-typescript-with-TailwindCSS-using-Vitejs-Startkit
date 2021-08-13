import React, { useState } from 'react';
import MainPage from './pages';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
