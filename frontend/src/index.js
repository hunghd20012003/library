import React from 'react';
import ReactDOM from 'react-dom';
import ManageBook from './components/Book/ManageBook';
import EditBook from './components/Book/EditBook';
import AddBook from './components/Book/AddBook';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<ManageBook />} />
        <Route path='/addBook/' element={<AddBook />}/>
        <Route path='/home/:bookId' element={<EditBook />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


