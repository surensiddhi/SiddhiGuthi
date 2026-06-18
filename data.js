/* ============================================================
   data.js — editable family data for the sub-pages.
   Edit the lists below; nothing else needs to change.
   ============================================================ */

/* ---- Seven Thakalis (top 7 living elders) ----
   Fields: name, birthYear (AD), lineage, note (optional).
   Keep the senior-most first; the order is the order shown. */
const ELDERS = [
  { name:"Purna Siddhi",   birthYear:1938,  lineage:"Thaipa — senior-most of the family", note:"Head of the seven Thakalis." },
  { name:"Rattan Siddhi",   birthYear:1940, lineage:"Thaipa — second senior-most of the family", note:"" },
  { name:"Krishna Siddhi", birthYear:1942,  lineage:"Thaipa — third senior-most of the family", note:"" },
  { name:"Indra Siddhi",   birthYear:1946,  lineage:"Thaipa — fourth senior-most of the family", note:"" },
  { name:"Subarna Siddhi", birthYear:1948,  lineage:"Thaipa — fifth senior-most of the family", note:"" },
  { name:"Surendra Siddhi", birthYear:1953, lineage:"Thaipa — sixth senior-most of the family", note:"" },
  { name:"Nava Raj Siddhi", birthYear:1953, lineage:"Thaipa — seventh senior-most of the family", note:"" },
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
    { name:"Nava Raj Siddhi",             position:"Secretary",       period:"2082–2084", phone:"", email:"" },
    { name:"Ananda Siddhi",               position:"Joint Secretary", period:"2082–2084", phone:"", email:"" },
    { name:"Roop Siddhi",                 position:"Treasurer",       period:"2082–2084", phone:"", email:"" },
    { name:"Subarta Siddhi",              position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Manoj Siddhi",                position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Raj Siddhi",                  position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Rajendra Siddhi",             position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Om Siddhi",                   position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"Ram Siddhi",                  position:"Member",          period:"2082–2084", phone:"", email:"" },
    { name:"—", position:"Member",          period:"2082–2084", phone:"", email:"" },
  ]
};
