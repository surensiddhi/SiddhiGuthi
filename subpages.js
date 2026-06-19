/* ============================================================
   subpages.js — renders Elder Persons and Executive Committee.
   Each page calls the relevant function on load.
   ============================================================ */

function initials(name){
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if(parts.length===0 || parts[0]==="—") return "•";
  if(parts.length===1) return parts[0][0];
  return (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
}

function ageFrom(birthYear){
  if(!birthYear) return "";
  return (new Date().getFullYear() - birthYear);
}

/* ---- Elder Persons ---- */
function renderElders(){
  const wrap = document.getElementById('peopleList');
  if(!wrap || typeof ELDERS === "undefined") return;
  ELDERS.forEach(p=>{
    const age = ageFrom(p.birthYear);
    const meta = [
      age ? `<span class="row">Age ${age}${p.birthYear?` &middot; b. ${p.birthYear}`:""}</span>` : "",
      p.lineage ? `<span class="row">${p.lineage}</span>` : ""
    ].join("");
    wrap.insertAdjacentHTML('beforeend',
      `<div class="person">
         <div class="monogram">${initials(p.name)}</div>
         <div>
           <div class="pname">${p.name}</div>
           <div class="pmeta">${meta}</div>
           ${p.note ? `<div class="pnote">${p.note}</div>` : ""}
         </div>
       </div>`);
  });
}

/* ---- Executive Committee ---- */
function renderCommittee(){
  const wrap = document.getElementById('peopleList');
  if(!wrap || typeof COMMITTEE === "undefined") return;

  const tb = document.getElementById('termVal');
  if(tb) tb.textContent = COMMITTEE.term;

  COMMITTEE.members.forEach(m=>{
    const contact = [
      m.phone ? `<span class="row"><a href="tel:${m.phone}">${m.phone}</a></span>` : "",
      m.email ? `<span class="row"><a href="mailto:${m.email}">${m.email}</a></span>` : "",
      m.period ? `<span class="row">Term ${m.period}</span>` : ""
    ].join("");
    wrap.insertAdjacentHTML('beforeend',
      `<div class="person">
         <div class="monogram">${initials(m.name)}</div>
         <div>
           <div class="pname">${m.name}</div>
           <div class="prole">${m.position}</div>
           <div class="pmeta">${contact}</div>
         </div>
       </div>`);
  });
}

/* footer year, if present */
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  /* Hide "Back to portal" when shown inside the modal (iframe).
     It stays visible when the page is opened directly on its own. */
  const back = document.getElementById('backLink');
  if(back && window.self !== window.top) back.style.display = 'none';
});
