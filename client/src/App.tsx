// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import StaffList from "./pages/StaffList";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/staff/:service" element={<StaffList />} />
        <Route path="/booking/:staffId" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
