import React from 'react';
import ReactDOM from 'react-dom';
import manageBook from './components/managebook';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<manageBook />} />
      
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


