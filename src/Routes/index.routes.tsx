import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import { Dashboard } from '../Pages/Dashboard';
import { ForgotPassword } from '../Pages/ForgotPassword';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';

export function RoutesPages() {
  return (
      <Routes >
          {/* routes Authentication */}
          <Route path="/" element={<Navigate replace to="/Dashboard" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot-password" element={<ForgotPassword />} />
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
  );
}