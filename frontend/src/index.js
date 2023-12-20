import React from 'react';
import ReactDOM from 'react-dom';
import Sach from './components/Book/Sach';
import ChiTietSach from './components/Book/ChiTietSach';
import ManageBook from './components/Book/ManageBook';
import EditBook from './components/Book/EditBook';
import AddBook from './components/Book/AddBook';
import ManageLoan from './components/Book/ManageLoan';
import LoanDetail from './components/Book/LoanDetail';
import GioHang from './components/Book/GioHang';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Sach />} />
        <Route path="/giohang" element={<GioHang />} />
        <Route path='/manageLoan' element={<ManageLoan />} />
        <Route path='/manageBook' element={<ManageBook />} />
        <Route path='/addBook/' element={<AddBook />}/>
        <Route path='/manageBook/:bookId' element={<EditBook />}/>
        <Route path='/manageLoan/:billID' element={<LoanDetail />}/>
        <Route path='/user/home' element={<Sach />}/>
        <Route path='/user/home/:bookId' element={<ChiTietSach />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


