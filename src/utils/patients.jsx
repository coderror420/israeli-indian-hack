const patients = [
  {
    id: 1,
    name: "Kanishka",
    age: 18,
    gender: "Female",
    bedNo: "B12",
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
  },
  {
    id: 4,
    name: "Rahul",
    age: 25,
    gender: "Male",
    bedNo: "D04",
    lastUpdated: "Today",
    vitals: [
      { name: "Blood Pressure", value: "130/85 mmHg", analysis: "normal" },
      { name: "Heart Rate", value: 76, analysis: "normal" },
      { name: "Temperature", value: 99.0, analysis: "normal" },
      { name: "Respiratory Rate", value: 18, analysis: "normal" }
    ],
    medicines: [
      { name: "Atorvastatin", dose: "20mg - once daily" }
    ],
    reminders: [
      { text: "Atorvastatin dose", time: "2025-08-10T09:00:00" }
    ]
  },
  {
    id: 5,
    name: "Sneha",
    age: 30,
    gender: "Female",
    bedNo: "B01",
    lastUpdated: "3 days ago",
    vitals: [
      { name: "Blood Pressure", value: "115/75 mmHg", analysis: "normal" },
      { name: "Heart Rate", value: 70, analysis: "normal" },
      { name: "Temperature", value: 98.5, analysis: "normal" },
      { name: "Respiratory Rate", value: 17, analysis: "normal" }
    ],
    medicines: [
      { name: "Levothyroxine", dose: "50mcg - once daily" }
    ],
    reminders: []
  },
  {
    id: 6,
    name: "Vikram",
    age: 45,
    gender: "Male",
    bedNo: "C15",
    lastUpdated: "Yesterday",
    vitals: [
      { name: "Blood Pressure", value: "150/95 mmHg", analysis: "high" },
      { name: "Heart Rate", value: 92, analysis: "high" },
      { name: "Temperature", value: 99.3, analysis: "low" },
      { name: "Respiratory Rate", value: 22, analysis: "high" }
    ],
    medicines: [
      { name: "Metoprolol", dose: "50mg - twice daily" },
      { name: "Lisinopril", dose: "10mg - once daily" }
    ],
    reminders: [
      { text: "Metoprolol morning dose", time: "2025-08-10T08:30:00" },
      { text: "Lisinopril evening dose", time: "2025-08-10T20:30:00" }
    ]
  },
  {
    id: 7,
    name: "Nisha",
    age: 28,
    gender: "Female",
    bedNo: "A12",
    lastUpdated: "4 days ago",
    vitals: [
      { name: "Blood Pressure", value: "118/78 mmHg", analysis: "normal" },
      { name: "Heart Rate", value: 68, analysis: "normal" },
      { name: "Temperature", value: 98.7, analysis: "normal" },
      { name: "Respiratory Rate", value: 16, analysis: "normal" }
    ],
    medicines: [
      { name: "Omeprazole", dose: "20mg - once daily" }
    ],
    reminders: []
  },
  {
    id: 8,
    name: "Arjun",
    age: 35,
    gender: "Male",
    bedNo: "D08",
    lastUpdated: "Today",
    vitals: [
      { name: "Blood Pressure", value: "125/80 mmHg", analysis: "normal" },
      { name: "Heart Rate", value: 75, analysis: "normal" },
      { name: "Temperature", value: 98.9, analysis: "normal" },
      { name: "Respiratory Rate", value: 18, analysis: "normal" }
    ],
    medicines: [
      { name: "Simvastatin", dose: "40mg - once daily" }
    ],
    reminders: [
      { text: "Simvastatin dose", time: "2025-08-10T21:00:00" }
    ]
  },
  {
    id: 9,
    name: "Pooja",
    age: 26,
    gender: "Female",
    bedNo: "B07",
    lastUpdated: "5 days ago",
    vitals: [
      { name: "Blood Pressure", value: "112/72 mmHg", analysis: "normal" },
      { name: "Heart Rate", value: 69, analysis: "normal" },
      { name: "Temperature", value: 98.6, analysis: "normal" },
      { name: "Respiratory Rate", value: 17, analysis: "normal" }
    ],
    medicines: [
      { name: "Calcium", dose: "500mg - once daily" }
    ],
    reminders: []
  },
  {
    id: 10,
    name: "Suresh",
    age: 50,
    gender: "Male",
    bedNo: "C03",
    lastUpdated: "Today",
    vitals: [
      { name: "Blood Pressure", value: "145/92 mmHg", analysis: "high" },
      { name: "Heart Rate", value: 85, analysis: "normal" },
      { name: "Temperature", value: 99.0, analysis: "normal" },
      { name: "Respiratory Rate", value: 21, analysis: "high" }
    ],
    medicines: [
      { name: "Amlodipine", dose: "5mg - once daily" },
      { name: "Hydrochlorothiazide", dose: "25mg - once daily" }
    ],
    reminders: [
      { text: "Take Amlodipine", time: "2025-08-10T07:00:00" }
    ]
  }
];

export default patients;
