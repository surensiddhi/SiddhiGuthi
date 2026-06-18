/* =========================================================
   CONFIG — replace the url values with your real app links.
   Google Apps Script web app  -> ends in /exec
   Supabase / hosted app        -> full https url
   ========================================================= */
/*
const APPS = [
  { key:"elders",    title:"Seven Thakalis",     desc:"Top seven elders",         url:"elders.html",    icon:"elder" },
  { key:"committee", title:"Executive Committee", desc:"Current office bearers",    url:"committee.html", icon:"committee" },
  { key:"account",   title:"Guthi Account",       desc:"Funds &amp; transactions",     url:"https://script.google.com/macros/s/REPLACE_ACCOUNT/exec",   icon:"account" },
  { key:"gallery",   title:"Photo Gallery",       desc:"Memories &amp; events",        url:"https://script.google.com/macros/s/REPLACE_GALLERY/exec",   icon:"gallery" },
  { key:"assets",    title:"Asset List",          desc:"Guthi property register",  url:"https://script.google.com/macros/s/REPLACE_ASSETS/exec",    icon:"assets" },
  { key:"tree",      title:"Family Tree",         desc:"Our lineage",              url:"https://script.google.com/macros/s/REPLACE_TREE/exec",      icon:"tree" },
];
*/
const APPS = [
  { key:"elders",    title:"Seven Thakalis",     desc:"Top seven elders",         url:"elders.html",    icon:"elder" },
  { key:"committee", title:"Executive Committee", desc:"Current office bearers",    url:"committee.html", icon:"committee" },
  { key:"account",   title:"Guthi Account",       desc:"Funds &amp; transactions",     url:"https://script.google.com/macros/s/REPLACE_ACCOUNT/exec",   icon:"account", comingSoon: true },
  { key:"gallery",   title:"Photo Gallery",       desc:"Memories &amp; events",        url:"https://script.google.com/macros/s/REPLACE_GALLERY/exec",   icon:"gallery", comingSoon: true },
  { key:"assets",    title:"Asset List",          desc:"Guthi property register",  url:"https://script.google.com/macros/s/REPLACE_ASSETS/exec",    icon:"assets", comingSoon: true },
  { key:"tree",      title:"Family Tree",         desc:"Our lineage",              url:"https://script.google.com/macros/s/REPLACE_TREE/exec",      icon:"tree", comingSoon: true },
];

// Then in your click handler:
if (app.comingSoon) {
  alert('Coming soon! 🚀');
  return;
}


/* Events — edit freely or wire to your DB later */
const EVENTS = [
  // date in ISO (YYYY-MM-DD, English). Nepali date is shown automatically.
  { date:"2026-07-24", name:"De Puja, Annual Guthi Starts",       meta:"Guthi Ghar &middot; 9:00 AM", tag:"Ritual" },
  { date:"2026-08-10", name:"Pancha Daan, Annusal Daan Gathering", meta:"Guthi Ghar Bahal &middot; Morning", tag:"Festival" },
  { date:"2026-10-21", name:"Dashain Family Reunion",   meta:"Ancestral home, Aagan Ghar",             tag:"Festival" },
  { date:"2026-09-02", name:"Chovar Annual Pooza", meta:"Chovar &middot; 4:00 PM", tag:"Meeting" },
  { date:"2026-10-21", name:"Swoyambhu Pooza",   meta:"Swoyambhu",             tag:"Festival" },
  { date:"2026-10-21", name:"Desi Pooja Final Family Reunion",   meta:"Aagan Ancestral home",             tag:"Festival" },
];

const ICONS = {
  elder:'<path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22c0-4 3.5-7 8-7s8 3 8 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  committee:'<path d="M3 21v-2a4 4 0 014-4h2a4 4 0 014 4v2M16 11a3 3 0 100-6 3 3 0 000 6zM6 9a3 3 0 100-6 3 3 0 000 6zM14 21v-2a4 4 0 014-4 3.5 3.5 0 013 3.5V21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  account:'<path d="M3 7h18v12H3zM3 7l2-3h14l2 3M7 13h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>',
  gallery:'<path d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="9" r="1.4" fill="currentColor"/>',
  assets:'<path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>',
  tree:'<path d="M12 4a3 3 0 100 6 3 3 0 000-6zM12 10v4M6 20a3 3 0 100-6 3 3 0 000 6zM18 20a3 3 0 100-6 3 3 0 000 6zM12 14H6v0M12 14h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
};

/* ===== Leadership shown on the front page =====
   Three standing roles. The "pala" flag accents the changing one.
   Edit names/lineage here. */
const LEADERSHIP = [
  { role:"Thaipa (Top Elder)", name:"Purna Siddhi",                  sub:"Senior-most of the family" },
  { role:"Chairman",           name:"Surendra Siddhi Bajracharya",   sub:"Executive Committee" },
  { role:"Pala (Current)",     name:"Roop Kumar Siddhi",             sub:"Son of Khadga Siddhi Gubhaju", pala:true },
];

/* ===== Fortnightly prey turn =====
   - members: fixed order. Add new members to the END of the list.
   - mark deceased:true when someone passes (they keep their place but are skipped).
   - startDate: the date the FIRST living member's turn began (YYYY-MM-DD).
   - fortnightDays: length of one turn (14 = a fortnight).
   The current turn is calculated automatically and skips deceased members. */
const PREY = {
  startDate: "2026-01-01",
  fortnightDays: 14,
  members: [
    { name:"Purna Siddhi" },
    { name:"Ratna Kumar Siddhi" },
    { name:"Krishna Siddhi" },
    { name:"Indra Siddhi" },
    { name:"Subarna Siddhi" },
    { name:"Surendra Siddhi" },
    { name:"Nava Raj Siddhi" },
    { name:"Subarta Siddhi" },
    { name:"Ananda Siddhi" },
    { name:"Rabindra Siddhi" },
    // ... add all ~100 members here in order
    // example of a deceased member who is skipped:
    // { name:"Late Member Name", deceased:true },
  ]
};

/* Render tiles */
const tiles = document.getElementById('tiles');
APPS.forEach(a=>{
  const b = document.createElement('button');
  b.className='tile';
  b.innerHTML = `<span class="ic"><svg viewBox="0 0 24 24">${ICONS[a.icon]}</svg></span>
                 <span class="t">${a.title}</span>
                 <span class="d">${a.desc}</span>`;
  b.addEventListener('click',()=>openApp(a));
  tiles.appendChild(b);
});

/* Render events — Nepali (BS) date primary, English secondary */
const up = document.getElementById('upcoming');
const ql = document.getElementById('quick');
EVENTS.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(e=>{
  const bs = NepaliDate.adToBs(e.date);
  const bsDay = bs ? NepaliDate.toNepDigits(bs.d) : "";
  const bsMon = bs ? NepaliDate.NEP_MONTHS[bs.m-1] : "";
  up.insertAdjacentHTML('beforeend',
    `<div class="ev">
       <div class="date"><div class="d">${bsDay}</div><div class="m">${bsMon}</div></div>
       <div class="info"><div class="name">${e.name}</div>
         <div class="meta">${e.meta}</div>
         <div class="meta"><span class="date-bs">${NepaliDate.formatBsNep(e.date)}</span>
           &middot; <span class="date-ad">${NepaliDate.formatAdShort(e.date)}</span></div>
         <span class="pill">${e.tag}</span></div>
     </div>`);
  ql.insertAdjacentHTML('beforeend',
    `<li><span>${e.name}</span><span class="tag">${NepaliDate.formatBsDayMonth(e.date)}</span></li>`);
});

/* Render leadership trio */
const leadBand = document.getElementById('leadBand');
LEADERSHIP.forEach(p=>{
  leadBand.insertAdjacentHTML('beforeend',
    `<div class="lead-card${p.pala?' is-pala':''}">
       <span class="lead-role">${p.role}</span>
       <span class="lead-name">${p.name}</span>
       <span class="lead-sub">${p.sub||''}</span>
     </div>`);
});

/* ===== Prey turn engine ===== */
const livingIdx = PREY.members.map((m,i)=>({m,i})).filter(x=>!x.m.deceased).map(x=>x.i);

function fortnightsSinceStart(){
  const start = new Date(PREY.startDate+"T00:00:00");
  const now = new Date();
  const days = Math.floor((now - start)/(1000*60*60*24));
  return Math.max(0, Math.floor(days / PREY.fortnightDays));
}
function dateForTurn(n){
  const start = new Date(PREY.startDate+"T00:00:00");
  const d = new Date(start.getTime() + n*PREY.fortnightDays*24*60*60*1000);
  const iso = d.toISOString().slice(0,10);
  return NepaliDate.formatBsNep(iso);   // Nepali (BS) date
}
/* which member is on turn at fortnight count c (living-only cycle) */
function memberAtTurn(c){
  if(livingIdx.length===0) return null;
  return livingIdx[c % livingIdx.length];
}

const turnNow = fortnightsSinceStart();
const currentMemberIdx = memberAtTurn(turnNow);

/* Spotlight: current */
document.getElementById('nowName').textContent =
  currentMemberIdx===null ? "—" : PREY.members[currentMemberIdx].name;
const endDate = dateForTurn(turnNow+1);
document.getElementById('nowDates').textContent =
  `${dateForTurn(turnNow)} → ${endDate}`;

/* Spotlight: next few */
const nextUp = document.getElementById('nextUp');
for(let k=1;k<=4;k++){
  const idx = memberAtTurn(turnNow+k);
  if(idx===null) break;
  nextUp.insertAdjacentHTML('beforeend',
    `<li><span>${PREY.members[idx].name}</span><span class="pos">${dateForTurn(turnNow+k)}</span></li>`);
}

/* Full rotation list */
const preyList = document.getElementById('preyList');
document.getElementById('memberCount').textContent = PREY.members.length;
PREY.members.forEach((m,i)=>{
  const cls = [i===currentMemberIdx?'current':'', m.deceased?'deceased':''].join(' ').trim();
  preyList.insertAdjacentHTML('beforeend',
    `<li class="${cls}"><span class="num">${i+1}</span><span class="who">${m.name}</span></li>`);
});

/* Find your turn — searches living members and reports next turn date */
const search = document.getElementById('preySearch');
const result = document.getElementById('searchResult');
search.addEventListener('input',()=>{
  const q = search.value.trim().toLowerCase();
  result.innerHTML = '';
  if(!q) return;
  const matches = PREY.members
    .map((m,i)=>({m,i}))
    .filter(x=>x.m.name.toLowerCase().includes(q));
  if(matches.length===0){ result.innerHTML='<div class="none">No member found by that name.</div>'; return; }
  matches.slice(0,5).forEach(x=>{
    let when;
    if(x.m.deceased){ when='Not in active rotation'; }
    else {
      const pos = livingIdx.indexOf(x.i);
      let c = turnNow;
      while(memberAtTurn(c)!==x.i) c++;
      when = (c===turnNow) ? 'This fortnight' : `Turn begins ${dateForTurn(c)}`;
    }
    result.insertAdjacentHTML('beforeend',
      `<div class="hit"><span class="nm">${x.m.name}</span><span class="when">${when}</span></div>`);
  });
});

/* Footer year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Modal logic */
const overlay=document.getElementById('overlay');
const frame=document.getElementById('frame');
const loading=document.getElementById('loading');
const modalTitle=document.getElementById('modalTitle');

function openApp(a){
  modalTitle.innerHTML=a.title;
  loading.style.display='flex';
  frame.src=a.url;
  overlay.classList.add('on');
  document.body.style.overflow='hidden';
}
frame.addEventListener('load',()=>{ loading.style.display='none'; });

function closeApp(){
  overlay.classList.remove('on');
  frame.src='';
  document.body.style.overflow='';
}
document.getElementById('closeBtn').addEventListener('click',closeApp);
overlay.addEventListener('click',e=>{ if(e.target===overlay) closeApp(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeApp(); });
