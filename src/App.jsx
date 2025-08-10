import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Journal from "./components/Journal";
import Learn from "./components/Learn";
import Vitals from "./components/Vitals";
import PatientVitals from "./components/PatientVitals"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="journal" element={<Journal />} />
          <Route path="learn" element={<Learn />} />

          {/* Route showing all patients in grid */}
          <Route path="vitals" element={<Vitals />} />

          {/* Route showing individual patient vitals by id */}
          <Route path="vitals/patient/:patientId" element={<PatientVitals />} />
        </Route>
      </Routes>
    </Router>
  );
}
