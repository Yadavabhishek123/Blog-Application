import React, { useState } from "react";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Homes/Home";
import Settings from "./Pages/Settings/Settings"
import Login from "./Pages/Login/Login"
import Single from "./Pages/Single/Single"
import Write from "./Pages/Write/Write"
import Register from "./Pages/Register/Register";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element={<Single/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
