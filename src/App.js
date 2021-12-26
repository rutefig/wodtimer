import React from 'react';
import './App.css';
import { Fortime } from './features/fortime/Fortime';

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Fortime />
        {/*
        <button>For Time</button>
        <button>AMRAP</button>
        <button>EMOM</button>
        <button>Tabata</button>
        */}
      </div>
    </div>
  );
}

export default App;
