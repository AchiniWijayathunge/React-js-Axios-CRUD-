import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import User from "./pages/user/User";
import AddUser from "./pages/user/AddUser";
import Edit from "./pages/user/Edit";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
