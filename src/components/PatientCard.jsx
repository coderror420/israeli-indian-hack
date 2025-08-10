import React from "react";
import { FaUser, FaClock } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const PatientCard = ({ patient }) => {
  if (patient) {
    return (
      <div
        className="bg-blue-100 rounded-xl p-5 sm:p-6 flex flex-col shadow-md min-h-[180px] sm:min-h-[220px] w-full justify-between"
        // If you want to use id for any reason like click handlers, add it here or in parent
      >
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <FaUser size={30} className="text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg sm:text-xl text-blue-600">
                {patient.name}
              </h3>
           
            </div>
          </div>

          {/* Details in two columns */}
          <div className="grid grid-cols-2 gap-x-0 mt-5 text-sm sm:text-base text-blue-600">
             <p>
              <span className="font-semibold">Patient ID:</span> {patient.id}
            </p>
            <p>
              <span className="font-semibold">Bed:</span> {patient.bedNo}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {patient.age}
            </p>
            <p>
              <span className="font-semibold">Gender: </span>{patient.gender}
            </p>
            
          </div>
        </div>

        {/* Last updated bottom-right */}
        <div className="flex items-center justify-end mt-4 text-sm sm:text-base text-blue-600">
          <FaClock size={14} className="mr-2" />
          <span>Last updated: {patient.lastUpdated}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 border-2 border-dashed border-blue-600 rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] w-full cursor-pointer hover:bg-[#d6e8ff] transition">
      <FiPlus size={42} className="text-blue-600" />
      <p className="mt-3 font-semibold text-blue-600 text-base sm:text-lg">
        Add Patient
      </p>
    </div>
  );
};

export default PatientCard;
