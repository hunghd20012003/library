import React from 'react';
import ReactDOM from 'react-dom';
import ManageBook from './components/Book/ManageBook';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<ManageBook />} />
      
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


