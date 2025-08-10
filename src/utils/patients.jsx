const patients = [
  {
    id: 1,
    name: "Kanishka",
    age: 18,
    gender: "Female",
    bedNo: "A04",
    lastUpdated: "Today",
    vitals: [
      { name: "Blood Pressure", value: "120/80 mmHg", analysis: "normal" },
      { name: "Heart Rate", value: 72, analysis: "normal" },
      { name: "Temperature", value: 98.6, analysis: "normal" },
      { name: "Respiratory Rate", value: 16, analysis: "normal" }
    ],
    medicines: [
      { name: "Paracetamol", dose: "500mg - twice daily" },
      { name: "Vitamin D", dose: "1000 IU - once daily" }
    ],
    reminders: [
      { text: "Take Vitamin D", time: "2025-08-10T20:00:00" },
      { text: "Blood test appointment", time: "2025-08-12T10:30:00" }
    ]
  },
  {
    id: 2,
    name: "Mannan",
    age: 19,
    gender: "Male",
    bedNo: "A05",
    lastUpdated: "Yesterday",
    vitals: [
      { name: "Blood Pressure", value: "140/90 mmHg", analysis: "high" },
      { name: "Heart Rate", value: 88, analysis: "normal" },
      { name: "Temperature", value: 99.1, analysis: "low" },
      { name: "Respiratory Rate", value: 20, analysis: "normal" }
    ],
    medicines: [
      { name: "Aspirin", dose: "75mg - once daily" }
    ],
    reminders: [
      { text: "Take Aspirin", time: "2025-08-10T08:00:00" }
    ]
  },
  {
    id: 3,
    name: "Aditi",
    age: 22,
    gender: "Female",
    bedNo: "C09",
    lastUpdated: "2 days ago",
    vitals: [
      { name: "Blood Pressure", value: "110/70 mmHg", analysis: "low" },
      { name: "Heart Rate", value: 65, analysis: "low" },
      { name: "Temperature", value: 98.4, analysis: "normal" },
      { name: "Respiratory Rate", value: 15, analysis: "normal" }
    ],
    medicines: [
      { name: "Ibuprofen", dose: "200mg - thrice daily" }
    ],
    reminders: []
  }
];

export default patients;
