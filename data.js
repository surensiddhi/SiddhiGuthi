/* ============================================================
   data.js — editable family data for the sub-pages.
   Edit the lists below; nothing else needs to change.
   ============================================================ */

/* ---- Seven Thakalis (top 7 living elders) ----
   Fields: name, birthYear (AD), lineage, note (optional).
   Keep the senior-most first; the order is the order shown. */
const ELDERS = [
  { name:"Purna Siddhi Gubhaju",        birthYear:1938, lineage:"Thaipa — senior-most of the family", note:"Head of the seven Thakalis." },
  { name:"Rattan Siddhi Gubhaju",       birthYear:1940, lineage:"Thaipa — second senior-most of the family", note:"" },
  { name:"Krishna Siddhi Gubhaju",      birthYear:1942, lineage:"Thaipa — third senior-most of the family", note:"" },
  { name:"Indra Siddhi Gubhaju",        birthYear:1946, lineage:"Thaipa — fourth senior-most of the family", note:"" },
  { name:"Subarna Siddhi Bajracharya",  birthYear:1948, lineage:"Thaipa — fifth senior-most of the family", note:"" },
  { name:"Surendra Siddhi Bajracharya", birthYear:1953, lineage:"Thaipa — sixth senior-most of the family", note:"" },
  { name:"Nava Raj Siddhi Bajracharya", birthYear:1953, lineage:"Thaipa — seventh senior-most of the family", note:"" },
  //{ name:"—", birthYear:1941, lineage:"—", note:"" },
];

/* ---- Executive Committee (12 members incl. Chairman) ----
   term: shown at the top.
   Fields per member: name, position, period, phone, email (any optional). */
const COMMITTEE = {
  term: "2082–2084 B.S.",
  members: [
    { name:"Surendra Siddhi Bajracharya", position:"Chairman",        period:"2082–2084", phone:"", email:"" },
    { name:"Amrit Siddhi Bajracharya",    position:"Vice Chairman",  period:"2082–2084", phone:"", email:"" },
    { name:"Nava Raj Siddhi Bajracharya", position:"Secretary",       period:"2082–2084", phone:"", email:"" },
    { name:"Ananda Siddhi Bajracharya",   position:"Joint Secretary", period:"2082–2084", phone:"", email:"" },
    { name:"Roop Siddhi Bajracharya",     position:"Treasurer",       period:"2082–2084", phone:"", email:"" },
    { name:"Subarta Siddhi Bajracharya",  position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Manoj Siddhi Bajracharya",    position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Raj Siddhi Bajracharya",      position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Rajendra Siddhi Bajracharya", position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Rajesh Siddhi",               position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Om Siddhi Gubhaju",           position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Ram Siddhi Gubhaju",          position:"Member",          period:"2082–2084", phone:"", email:"" },
  ]
};
