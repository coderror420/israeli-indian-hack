import React from "react";
import PatientCard from "./PatientCard";

const Vitals = () => {
  const patients = [
     { name: "Kanishka", age: 18, gender: "Female", bedNo: "B12", lastUpdated: "Today" },
  { name: "Mannan", age: 19, gender: "Male", bedNo: "A05", lastUpdated: "Yesterday" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {patients.map((patient, index) => (
        <PatientCard key={index} patient={patient} />
      ))}
      {[...Array(6)].map((_, index) => (
        <PatientCard key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default Vitals;
