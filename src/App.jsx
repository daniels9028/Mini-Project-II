import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Users from "./pages/Users";
import DetailUser from "./pages/DetailUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/detail_user/:id" element={<DetailUser />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
