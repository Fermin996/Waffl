import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PinPad from './components/PinPad/PinPad';
import DiningRoom from './components/DiningRoom/DiningRoom';
import Table from './components/Table/Table';

function App() {

  const [currentTable, setCurrentTable] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PinPad />}/>
        <Route path='/user-view' element={<DiningRoom setTable={setCurrentTable} currTable={currentTable}/>}/>
        <Route path='/user-view/table' element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
