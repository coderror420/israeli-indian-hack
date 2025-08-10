import React from "react";
import { Link } from "react-router-dom";
import PatientCard from "./PatientCard";
import patients from "../utils/patients";

const Vitals = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {patients.map((patient) => (
        <Link to={"patient/" + patient.id}><PatientCard key={patient.id} patient={patient} /></Link>
      ))}
      {[...Array(6)].map((_, index) => (
        <PatientCard key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default Vitals;
