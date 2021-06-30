import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { NotesTable } from './components/NotesTable';

function App() {
  return (
    <div className="container">
      <NotesTable></NotesTable>
    </div>
  );
}

export default App;
