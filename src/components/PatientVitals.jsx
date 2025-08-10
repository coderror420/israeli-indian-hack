import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import patients from "../utils/patients";

const getColor = (status) => {
  switch (status) {
    case "normal":
      return "text-green-600";
    case "low":
      return "text-yellow-600";
    case "high":
      return "text-orange-600";
    case "critical":
      return "text-red-600";
    default:
      return "text-gray-400";
  }
};

const PatientVitals = () => {
  const { patientId } = useParams();
  const patient = patients.find((p) => p.id === Number(patientId));

  const [reminders, setReminders] = useState(patient?.reminders || []);
  const [reminderText, setReminderText] = useState("");
  const [reminderTime, setReminderTime] = useState("");

  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      reminders.forEach((r) => {
        const reminderDate = new Date(r.time);
        if (
          !r.notified &&
          reminderDate.getFullYear() === now.getFullYear() &&
          reminderDate.getMonth() === now.getMonth() &&
          reminderDate.getDate() === now.getDate() &&
          reminderDate.getHours() === now.getHours() &&
          reminderDate.getMinutes() === now.getMinutes()
        ) {
          if (Notification.permission === "granted") {
            new Notification(`Reminder: ${r.text}`);
            setReminders((prev) =>
              prev.map((rem) => (rem === r ? { ...rem, notified: true } : rem))
            );
          }
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [reminders]);

  const addReminder = () => {
    if (!reminderText || !reminderTime) return alert("Fill all fields");
    setReminders([...reminders, { text: reminderText, time: reminderTime, notified: false }]);
    setReminderText("");
    setReminderTime("");
  };

  if (!patient) {
    return (
      <p className="text-blue-700 font-bold text-center mt-6">
        Patient not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans space-y-10">
      {/* Patient Details */}
      <section className="bg-blue-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-blue-700 font-semibold text-2xl mb-4 border-b border-blue-300 pb-2">
          Patient Details
        </h2>
        <div className="text-gray-700 space-y-1">
          <p><span className="font-semibold">Name:</span> {patient.name}</p>
          <p><span className="font-semibold">Age:</span> {patient.age}</p>
          <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
          <p><span className="font-semibold">Bed No:</span> {patient.bedNo}</p>
        </div>
      </section>

      {/* Vitals Table */}
      <section className="bg-blue-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-blue-700 font-semibold text-2xl mb-4 border-b border-blue-300 pb-2">
          Vitals
        </h2>
        <table className="w-full text-left text-gray-700 text-sm sm:text-base">
          <thead>
            <tr>
              <th className="py-2 px-3">Vital</th>
              <th className="py-2 px-3">Value</th>
              <th className="py-2 px-3">Analysis</th>
            </tr>
          </thead>
          <tbody>
            {patient.vitals.map(({ name, value, analysis }) => (
              <tr key={name} className="even:bg-blue-50">
                <td className="py-2 px-3">{name}</td>
                <td className="py-2 px-3">{value}</td>
                <td className={`py-2 px-3 font-semibold ${getColor(analysis)}`}>
                  {analysis.charAt(0).toUpperCase() + analysis.slice(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Medicine Schedule */}
      <section className="bg-blue-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-blue-700 font-semibold text-2xl mb-4 border-b border-blue-300 pb-2">
          Medicine Schedule
        </h2>
        <table className="w-full text-left text-gray-700 text-sm sm:text-base">
          <thead>
            <tr>
              <th className="py-2 px-3">Medicine</th>
              <th className="py-2 px-3">Dose</th>
            </tr>
          </thead>
          <tbody>
            {patient.medicines.map(({ name, dose }) => (
              <tr key={name} className="even:bg-blue-50">
                <td className="py-2 px-3">{name}</td>
                <td className="py-2 px-3">{dose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Reminders */}
      <section className="bg-blue-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-blue-700 font-semibold text-2xl mb-4 border-b border-blue-300 pb-2">
          Reminders
        </h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Reminder text"
            value={reminderText}
            onChange={(e) => setReminderText(e.target.value)}
            className="border border-blue-300 rounded-md p-2 flex-grow min-w-[200px]"
          />
          <input
            type="datetime-local"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="border border-blue-300 rounded-md p-2 w-auto"
          />
          <button
            onClick={addReminder}
            className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Add Reminder
          </button>
        </div>
        {reminders.length === 0 ? (
          <p className="text-blue-700">No reminders added.</p>
        ) : (
          <ul className="list-disc list-inside space-y-1 text-blue-900">
            {reminders.map((r, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>
                  {r.text} at {new Date(r.time).toLocaleString()}
                </span>
                {r.notified && (
                  <span className="text-green-600 font-bold ml-2">✔️</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default PatientVitals;
