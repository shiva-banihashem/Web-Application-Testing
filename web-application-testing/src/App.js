import React, { useState, useEffect } from 'react';
import  Dashboard from './Components/Dashboard';
import Display from './Components/Display';
import './App.css';
function App() {
  const initialValues = {
    ball: 0,
    strike: 0
  }

  const [count, setCount] = useState(initialValues);

  useEffect(() => {
    if (count.strike === 4 || count.ball === 5) {
      setCount(initialValues);
    }
  }, [count, initialValues])

  const strikeBall = (e) => {
    let value = e.target.innerText.toLowerCase();
    if (value === 'strike') {
      setCount(prev => ({
        ...prev,
        strike: prev.strike + 1
      }))
    } else {
      setCount(prev => ({
        ...prev,
        ball: prev.ball + 1
      }))
    }
  }

  const hit = () => {
    setCount(initialValues);
  }

  const foul = () => {
    if (count.strike < 2) {
      setCount(prev => ({
        ...prev,
        strike: prev.strike + 1
      }))
    }
    
  }

  return (
    <div className="App">
      <header><h1>Baseball Dashboard</h1></header>
      
      
      
      <Display strike={count.strike} ball={count.ball}/>
        <Dashboard 
          strikeBall={strikeBall}
          hit={hit}
          foul={foul}
          
        />
    </div>
  );
}

export default App;
