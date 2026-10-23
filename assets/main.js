(() => {
  'use strict';
  const doc = document;
  const intro = doc.getElementById('intro');
  const enter = doc.getElementById('enterSite');
  let seen = false;
  try { seen = sessionStorage.getItem('jh-portfolio-entered') === '1'; } catch (e) { /* Storage optional */ }
  function dismissIntro() {
    intro.classList.add('leaving');
    document.body.classList.remove('intro-open');
    try { sessionStorage.setItem('jh-portfolio-entered', '1'); } catch (e) { /* Storage optional */ }
    window.setTimeout(() => { intro.hidden = true; }, 620);
  }
  if (seen) { intro.hidden = true; } else { document.body.classList.add('intro-open'); enter.focus({ preventScroll: true }); }
  enter.addEventListener('click', dismissIntro);
  const themeToggle = doc.getElementById('themeToggle');
  try {
    if (localStorage.getItem('jh-theme') === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (e) { /* Storage optional */ }
  function syncThemeLabel() { themeToggle.setAttribute('aria-label', document.documentElement.dataset.theme === 'dark' ? 'Switch to light color theme' : 'Switch to dark color theme'); }
  syncThemeLabel();
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('jh-theme', next); } catch (e) { /* Storage optional */ }
    syncThemeLabel();
  });
  const menuToggle = doc.getElementById('menuToggle');
  const mobileNav = doc.getElementById('mobileNav');
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded','false'); }));
  const featured = [
    { num:'01',label:'BATIK <span>STUDIO</span>',type:'AI GENERATION · 3D VISUALISATION',kind:'batik' },
    { num:'02',label:'AI <span>THEATRE</span>',type:'SCCCI · INTERACTIVE EXPERIENCE',kind:'theatre' },
    { num:'03',label:'NAN’AO <span>TRAVEL</span>',type:'AI TOURISM · STORYTELLING',kind:'travel' }
  ];
  const art = doc.getElementById('featuredArt');
  doc.querySelectorAll('.project-select').forEach(button => button.addEventListener('click', () => {
    const f = featured[Number(button.dataset.feature)];
    doc.querySelectorAll('.project-select').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    doc.getElementById('fileNum').textContent = f.num;
    doc.getElementById('featuredLabel').innerHTML = f.label;
    doc.getElementById('featuredType').textContent = f.type;
    art.className = 'batik-art art-' + f.kind;
    art.innerHTML = f.kind === 'batik' ? '<span class="batik-shape b1"></span><span class="batik-shape b2"></span><span class="batik-shape b3"></span><span class="batik-shape b4"></span><span class="batik-shape b5"></span><span class="batik-shape b6"></span>' : f.kind === 'theatre' ? '<div class="theatre-ring ring-a"></div><div class="theatre-ring ring-b"></div><div class="theatre-core">✺</div>' : '<div class="travel-sun">✳</div><div class="travel-curve"></div><div class="travel-label">FOLLOW WHAT MOVES YOU ↗</div>';
  }));
  const filters = doc.querySelectorAll('.filter');
  const projects = doc.querySelectorAll('.project-card');
  filters.forEach(button => button.addEventListener('click', () => {
    const kind = button.dataset.filter;
    filters.forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    projects.forEach(card => { card.hidden = !(kind === 'all' || card.dataset.category.split(' ').includes(kind)); });
  }));
  const cases = {
    batik: { num:'01', type:'AI / CULTURAL TECHNOLOGY',title:'Batik Studio', year:'2026',summary:'Making cultural heritage part of a new, interactive design process.',overview:'Batik Studio explores how artificial intelligence can support traditional batik design while helping people visualise patterns on 3D garments.',role:'AI workflow design, prototype development, user interaction planning, documentation and presentation.',highlights:['AI-based batik design generation','3D garment visualisation workflow','Cultural preservation and accessible creative exploration'],recognition:'Gold Award — DIGITEX 2026 (UTM); oral presentation at DEIC 2026.',color:'peach' },
    sccci: { num:'02', type:'CLIENT-BASED AI EXPERIENCE',title:'SCCCI AI Theatre', year:'2026',summary:'When business history becomes an interactive conversation.',overview:'An AI-powered exhibition experience connected to the Singapore Chinese Chamber of Commerce & Industry, combining content structure and user interaction with conversational AI.',role:'AI response flow design, user interaction logic, content structuring, testing, refinement and delivery support as part of the Digital Magic Studio team.',highlights:['Structured AI responses for visitors','User-focused dialogue and experience flow','Iterative testing aligned with client requirements'],recognition:'Professional client-based interactive AI project.',color:'violet' },
    nanao: { num:'03', type:'AI TOURISM / EXPERIENCE DESIGN',title:'Nan’ao AI Travel Guide', year:'2025',summary:'A travel experience led by feeling, discovery and local stories.',overview:'An AI emotional travel guide concept designed to help visitors discover Nan’ao through personalised journeys, emotionally relevant recommendations and cultural storytelling.',role:'User journey, emotional interaction concepts, travel recommendation ideas and AI-guided storytelling features.',highlights:['Emotion-aware visitor journey concept','Cultural storytelling and local exploration','Travel recommendations and interaction planning'],recognition:'Second Prize — 2025 Nan’ao County Rural Operator Competition, Rural Cultural & Creative Track.',color:'yellow' }
  };
  const dialog = doc.getElementById('projectDialog');
  const dialogBody = doc.getElementById('dialogBody');
  const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  let previousFocus = null;
  function showProject(key) {
    const p = cases[key]; if (!p) return;
    previousFocus = doc.activeElement;
    dialogBody.innerHTML = `<div class="dialog-kicker">PROJECT FILE / ${p.num} · ${p.year}</div><div class="dialog-illustration ${p.color}"><span>THE WORK FILES</span><strong>${esc(p.title)}</strong><i>✳</i></div><span class="project-type">${esc(p.type)}</span><h2 id="dialogTitle">${esc(p.title)}<span class="period">.</span></h2><p class="dialog-summary">${esc(p.summary)}</p><div class="dialog-detail"><div><span class="tiny-label">THE IDEA</span><p>${esc(p.overview)}</p></div><div><span class="tiny-label">WHAT I WORKED ON</span><p>${esc(p.role)}</p></div></div><div class="dialog-highlights"><span class="tiny-label">KEY ELEMENTS</span><ul>${p.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul></div><p class="dialog-recognition"><strong>✷ Milestone:</strong> ${esc(p.recognition)}</p><a href="mailto:junhaochong5@gmail.com?subject=${encodeURIComponent('Enquiry about '+p.title)}" class="pill-btn primary">Ask me about this project ↗</a>`;
    dialog.showModal();
  }
  projects.forEach(card => {
    card.addEventListener('click', () => showProject(card.dataset.project));
    card.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); showProject(card.dataset.project); } });
  });
  doc.getElementById('dialogClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', ev => { if (ev.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => previousFocus?.focus());
  doc.getElementById('year').textContent = new Date().getFullYear();
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold:.09 });
  doc.querySelectorAll('.reveal').forEach(item => observer.observe(item));
})();
