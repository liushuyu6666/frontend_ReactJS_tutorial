import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Table from './components/Table';
import TurnPage from './components/TurnPage';
import BestPracticeTurnPage from "./components/BestPracticeTurnPage";
// import TestsetState from "./components/TestsetState";
import Timer from "./components/Timer";

function App() {
  return (
      <>
        {/*<TurnPage key={1}/>*/}
        {/*<BestPracticeTurnPage key={2}/>*/}
        {/*<Counter key = {3}></Counter>*/}
        {/*<Table key={4}/>*/}
        {/*  <TestsetState/>*/}
        <Timer/>
      </>
  );
}

export default App;
