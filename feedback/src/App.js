import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Admin from './components/Admin/admin'
import User from './components/User/user'
import DatasetUpload from './components/DataUpload'
import { AuthProvider } from './components/Auth';
import Qupload from "./components/Admin/qupload"

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />       
        <Route path="/user" element={<User />} />       
        <Route path="/datasetupload" element={<DatasetUpload />} />       
        <Route path="/qupload" element={<Qupload />} />       
    
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
