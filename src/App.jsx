import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Users from "./pages/Users";
import DetailUser from "./pages/DetailUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail_user/:id"
          element={
            <ProtectedRoute>
              <DetailUser />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
