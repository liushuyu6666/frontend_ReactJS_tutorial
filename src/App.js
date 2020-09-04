import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Table from './components/Table';

function App() {
  return (
      <>
        <Counter key={1}/>
        <Counter key={2}/>
        <Table/>
      </>
  );
}

export default App;
