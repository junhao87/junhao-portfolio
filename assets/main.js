'use strict';
(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const names = {projects:'Projects',about:'About Me',experience:'Experience',awards:'Recognition',skills:'Tech Stack',contact:'Contact',terminal:'Terminal'};
  const appIcons = {projects:'i-folder',about:'i-user',experience:'i-code',awards:'i-award',skills:'i-grid',contact:'i-mail',terminal:'i-terminal'};
  let highestZ = 110, lastApp = null, toastTimer;
  const projectData = {
    batik: {
      name:'Batik Studio',category:'AI GENERATION · CULTURAL HERITAGE · 2026',headline:'Tradition, reimagined through intelligent design.',
      art:'art-batik',title:'BATIK<br>STUDIO',decoration:'<div class="batik-bloom"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>',
      intro:'An independently developed platform combining Poisson blending, Stable Diffusion Img2Img, 3D garments, color customization and Batik cultural learning.',
      role:'Sole Developer & Researcher. Built the AI generation pipeline, Three.js garment visualization, multilingual cultural assistant and complete web experience.',
      outcome:'Presented at exhibitions and research events, including DIGITEX 2026 (Gold Award) and DEIC 2026 International Conference.',
      tags:['Stable Diffusion','Poisson Blending','Three.js','Full Stack']
    },
    sccci: {
      name:'SCCCI AI Theatre',category:'CLIENT-BASED PROJECT · INTERACTIVE AI · 2026',headline:'Turning history and storytelling into a two-way conversation.',
      art:'art-sccci',title:'AI<br>THEATRE',decoration:'<div class="sccci-disc"><div class="disc-ring"></div><div class="disc-ring ring-b"></div><div class="disc-core">✳</div></div>',
      intro:'An interactive AI experience supporting user engagement and business storytelling for the Singapore Chinese Chamber of Commerce & Industry programme.',
      role:'Supported the AI response flow, content organisation, user interaction logic, testing, refinement and project delivery materials.',
      outcome:'Practical experience building and testing an AI-powered installation in a real client-facing project environment.',
      tags:['Conversational AI','Interaction Design','Testing','Client Project']
    },
    nanao: {
      name:"Nan’ao AI Travel Guide",category:'INNOVATION · AI TOURISM · 2025',headline:'Discovering places through culture, emotion and curiosity.',
      art:'art-nanao',title:'FEEL THE<br>JOURNEY.',decoration:'<div class="nanao-route"><i></i><i></i><i></i><b>✦</b><b>✦</b></div>',
      intro:'An emotional AI travel guide concept designed to make Nan’ao’s culture and tourism more personal through expressive journeys and storytelling.',
      role:'Designed the overall experience concept, user journey, emotional interaction logic, travel recommendation ideas and AI-guided storytelling flow.',
      outcome:'Second Prize in the Rural Cultural and Creative Track at the 2025 Nan’ao County Rural Operator Competition in China.',
      tags:['AI Concept','Tourism','UX Strategy','Storytelling']
    }
  };

  // Single source of truth for portfolio descriptions and case studies.
  const editableProjects = window.JH_CONTENT?.projects || {};
  Object.entries(editableProjects).forEach(([id, content]) => {
    if (projectData[id]) {
      projectData[id].headline = content.tagline || projectData[id].headline;
      projectData[id].intro = content.summary || projectData[id].intro;
      projectData[id].role = content.contribution || projectData[id].role;
      projectData[id].outcome = content.result || projectData[id].outcome;
      projectData[id].tags = content.tags || projectData[id].tags;
      projectData[id].slug = content.slug;
    }
  });
  // Photos are optional: blank placeholders remain until a real file is provided.
  $$('.profile-photo-wrap .real-photo').forEach(photo => {
    photo.addEventListener('load', () => photo.parentElement.classList.add('has-photo'));
    photo.addEventListener('error', () => { photo.hidden = true; });
    if (photo.complete && photo.naturalWidth) photo.parentElement.classList.add('has-photo');
  });
  function syncMobileNavigation(app) {
    $$('.mobile-tab').forEach(tab => {
      const active = tab.dataset.mobileTab === app;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('aria-current','page');
      else tab.removeAttribute('aria-current');
    });
  }
  // Upload original PNG/JPG files; Batik cover works with either format on desktop/mobile.
  function addOptionalCover(container, path) {
    if (!container || !path) return;
    const img = new Image(); img.className = 'real-project-cover'; img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
    img.addEventListener('load', () => { container.appendChild(img); container.classList.add('has-cover'); }, {once:true});
    const candidates = /\/batik\//.test(path) ? [...new Set([path.replace(/\.(jpg|jpeg|png|webp)$/i, '.png'), path.replace(/\.(jpg|jpeg|png|webp)$/i, '.jpg'), path.replace(/\.(jpg|jpeg|png|webp)$/i, '.jpeg'), path.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp')])] : [path];
    let i = 0;
    img.addEventListener('error', () => { if (++i < candidates.length) img.src = candidates[i]; });
    img.src = candidates[0];
  }
  Object.entries(editableProjects).forEach(([key, project]) => {
    addOptionalCover($(`.project-tile[data-project="${key}"] .tile-art`), project.media?.cover);
    const feature = key === 'batik' ? '.mobile-feature-batik' : key === 'sccci' ? '.mobile-feature-sccci' : '.mobile-feature-nanao';
    addOptionalCover($(feature), project.media?.cover);
  });
  function toast(message) {
    const t = $('#toast'); t.textContent = message; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }
  function setBoot(isVisible) {
    const b=$('#boot');
    if (!isVisible) { b.classList.add('is-hidden'); b.setAttribute('aria-hidden','true'); try {sessionStorage.setItem('jh-portfolio-entered','1');} catch (_) {} }
  }
  $('#enterButton').addEventListener('click', () => setBoot(false));
  try { if (sessionStorage.getItem('jh-portfolio-entered') === '1') setBoot(false); } catch (_) {}

  function moveFront(win) { win.style.zIndex = String(++highestZ); }
  function openApp(app) {
    const win = document.getElementById('win-'+app);
    if (!win) return;
    if (win.hidden) {
      win.hidden = false;
      win.classList.remove('is-maximized');
      // Slight offset on each additional app, while keeping windows inside the viewport.
      const openCount=$$('.app-window.is-open').length;
      if (window.innerWidth > 600) {
        win.style.left = 'calc(50% + '+Math.min(openCount*21,90)+'px)';
        win.style.top  = 'calc(49% + '+Math.min(openCount*16,65)+'px)';
      }
      requestAnimationFrame(() => win.classList.add('is-open'));
    } else { win.classList.add('is-open'); }
    moveFront(win); lastApp=app; syncMobileNavigation(app);
    $$(`.dock-icon[data-app="${app}"]`).forEach(el=>el.classList.add('is-running'));
    if (app==='terminal') setTimeout(() => $('#terminalInput').focus(),200);
    if (app==='projects') resetDetail(false);
  }
  function closeApp(app) {
    const win=$('#win-'+app); if (!win) return;
    win.classList.remove('is-open');
    setTimeout(() => { if (!win.classList.contains('is-open')) win.hidden = true; },240);
    $$(`.dock-icon[data-app="${app}"]`).forEach(el=>el.classList.remove('is-running'));
    if (window.innerWidth<=600 && !$$('.app-window.is-open').length) syncMobileNavigation('home');
  }
  function closeAll(){ $$('.app-window.is-open').forEach(w=>closeApp(w.dataset.window)); }
  function home(){closeAll();syncMobileNavigation('home'); if (window.innerWidth<=600) $('#mobileHome').scrollTop = 0; else toast('Back to the desktop ✳');}

  document.addEventListener('click',e=>{
    const mobileProject=e.target.closest('[data-project-open]');
    if (mobileProject) {
      const projectId=mobileProject.dataset.projectOpen;
      openApp('projects');
      // Keep project detail visible even after a filtered browse session.
      $$('.browser-filter')[0]?.click();
      openProject(projectId);
      return;
    }
    const app=e.target.closest('[data-app]');
    if(app) { e.preventDefault(); openApp(app.dataset.app); return; }
    const closer=e.target.closest('[data-close]'); if(closer){closeApp(closer.dataset.close);return;}
    const minimizer=e.target.closest('[data-min]'); if(minimizer){closeApp(minimizer.dataset.min);return;}
    const maximizer=e.target.closest('[data-max]'); if(maximizer){const w=$('#win-'+maximizer.dataset.max);w.classList.toggle('is-maximized');moveFront(w);return;}
    const action=e.target.closest('[data-action]');
    if(action?.dataset.action==='home')home();
    if(action?.dataset.action==='search')showLauncher();
  });
  $$('.app-window').forEach(w=>w.addEventListener('pointerdown',()=>moveFront(w)));

  // Drag a window by its chrome. Only mouse/pen handles drag to keep touch scrolling reliable.
  $$('.window-titlebar').forEach(bar=>{
    let drag=null;
    bar.addEventListener('pointerdown',e=>{
      if(e.button!==0 || e.pointerType==='touch' || e.target.closest('button'))return;
      const w=bar.closest('.app-window');
      if(w.classList.contains('is-maximized') || window.innerWidth<=600)return;
      const layer=$('#windowLayer').getBoundingClientRect(), rect=w.getBoundingClientRect();
      drag={w,x:e.clientX,y:e.clientY,left:rect.left-layer.left+rect.width/2,top:rect.top-layer.top+rect.height/2,layer};
      w.style.left=drag.left+'px';w.style.top=drag.top+'px';w.classList.add('is-dragging');
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove',e=>{
      if(!drag)return;
      const rect=drag.w.getBoundingClientRect(), maxX=drag.layer.width-rect.width*.25, maxY=drag.layer.height-50;
      drag.w.style.left=Math.max(rect.width*.25,Math.min(maxX,drag.left+e.clientX-drag.x))+'px';
      drag.w.style.top=Math.max(50,Math.min(maxY,drag.top+e.clientY-drag.y))+'px';
    });
    const stop=()=>{if(drag){drag.w.classList.remove('is-dragging');drag=null;}};
    bar.addEventListener('pointerup',stop);bar.addEventListener('pointercancel',stop);
    bar.addEventListener('dblclick',e=>{if(!e.target.closest('button'))bar.querySelector('[data-max]')?.click();});
  });

  // Browse projects by category; detail stays inside the portfolio window.
  $$('.browser-filter').forEach(filter=>filter.addEventListener('click',()=>{
    $$('.browser-filter').forEach(b=>b.classList.toggle('active',b===filter));
    const value=filter.dataset.projectFilter;
    $$('.project-tile').forEach(tile=>tile.hidden=value!=='all'&&!tile.dataset.category.split(' ').includes(value));
    resetDetail(false);
  }));
  function resetDetail(scroll=true) {
    $('#projectDetail').hidden=true;
    $('#projectDetail').innerHTML='';
    if(scroll)$('#browserMain').scrollTop=0;
  }
  function openProject(key){
    const d=projectData[key];if(!d)return;
    const content=`<button type="button" class="detail-back" id="detailBack">← BACK TO ALL WORK</button>
      <div class="detail-art ${d.art}"><span class="art-toplabel">${d.category}</span>${d.decoration}<strong>${d.title}</strong><span class="art-bottomlabel">CHONG JUN HAO · SELECTED WORK</span></div>
      <span class="micro-label">SELECTED PROJECT / CASE STUDY</span><h2 style="font:600 34px 'Space Grotesk',sans-serif;letter-spacing:-.055em;margin:12px 0 6px">${d.name}</h2>
      <p class="detail-intro">${d.headline}</p>
      <a class="case-study-open" href="projects/${d.slug}.html">OPEN COMPLETE CASE STUDY <span>↗</span></a><div class="detail-cols"><div><h3>THE IDEA</h3><p>${d.intro}</p><h3>MY CONTRIBUTION</h3><p>${d.role}</p></div><div><h3>THE RESULT</h3><p>${d.outcome}</p><h3>FOCUS AREAS</h3><div class="detail-tags">${d.tags.map(t=>'<span>'+t+'</span>').join('')}</div></div></div>`;
    const detail=$('#projectDetail');detail.innerHTML=content;detail.hidden=false;$('#browserMain').scrollTop=0;
    addOptionalCover($('.detail-art',detail), editableProjects[key]?.media?.cover);
    $('#detailBack').addEventListener('click',()=>resetDetail());
  }
  $$('.project-tile').forEach(t=>t.addEventListener('click',()=>openProject(t.dataset.project)));

  // Contact copy with a fallback for local file browsing.
  $('#copyEmail').addEventListener('click',async()=>{
    const email='junhaochong5@gmail.com';
    try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(email);toast('Email address copied to clipboard');return;}}catch(_){}
    window.prompt('Copy email address:',email);
  });

  // Terminal: strictly local predefined commands, no code execution/network.
  const terminalHelp='Available commands: help, about, projects, skills, experience, awards, contact, resume, open [app], date, clear';
  const terminalResponses={
    help:terminalHelp,
    about:'CHONG JUN HAO — AI graduate, junior software developer & curious maker.\nBased in Johor Bahru, Malaysia.',
    projects:'01  Batik Studio — AI generation + 3D garment visualisation\n02  SCCCI AI Theatre — interactive AI client project\n03  Nan’ao AI Travel Guide — AI tourism concept',
    skills:'Python, JavaScript, HTML/CSS, PHP, Computer Vision, NLP, AI Model Evaluation, MySQL, UI/UX.',
    experience:'2026—present  Digital Magic Studio (Freelance AI Project Assistant)\n2025—2026      Digital Magic Studio (Intern)\n2023—2024      My Serve Solutions (UI/UX Intern)',
    awards:'DIGITEX Gold 2026 · DIGITEX Silver 2026 · Nan’ao Second Prize 2025 · Indigo Silver 2026 · Kancil Merit 2025',
    contact:'Say hello: junhaochong5@gmail.com'
  };
  const terminalForm=$('#terminalForm'), terminalOutput=$('#terminalOutput'), terminalInput=$('#terminalInput');
  terminalForm.addEventListener('submit',e=>{
    e.preventDefault();const raw=terminalInput.value.trim();if(!raw)return;
    terminalInput.value='';const command=raw.toLowerCase().replace(/\s+/g,' ');
    if(command==='clear'){terminalOutput.replaceChildren();return;}
    const line=document.createElement('div');line.textContent='junhao@portfolio ~ % '+raw;line.className='term-purple';terminalOutput.appendChild(line);
    const answer=document.createElement('div');answer.className='term-aqua';
    if(terminalResponses[command])answer.textContent=terminalResponses[command];
    else if(command==='date')answer.textContent=new Date().toString();
    else if(command==='resume'){answer.textContent='Opening resume in a new tab...';window.open('resume.html','_blank','noopener,noreferrer');}
    else if(command.startsWith('open ')){
      const target=command.slice(5).trim();
      if(names[target]){openApp(target);answer.textContent='Opening '+names[target]+'...';}
      else answer.textContent='Unknown app. Try: open projects, open about, open contact.';
    }
    else answer.textContent='Command not found: '+raw+'\nTry help';
    terminalOutput.appendChild(answer);terminalOutput.appendChild(document.createElement('br'));terminalOutput.scrollTop=terminalOutput.scrollHeight;
  });

  // Command palette Ctrl/Cmd+K
  const actions=[...Object.keys(names).map(id=>({id,name:names[id],icon:appIcons[id],type:'APP'})),
    {id:'resume',name:'View Résumé',icon:'i-file',type:'LINK'},
    {id:'batik',name:'Batik Studio',icon:'i-folder',type:'PROJECT'},
    {id:'sccci',name:'SCCCI AI Theatre',icon:'i-folder',type:'PROJECT'},
    {id:'nanao',name:'Nan’ao AI Travel Guide',icon:'i-folder',type:'PROJECT'}];
  let matching=[],activeMatch=0;
  function drawMatches(){
    const term=$('#launcherInput').value.toLowerCase().trim();
    matching=actions.filter(a=>a.name.toLowerCase().includes(term)||a.id.toLowerCase().includes(term)||a.type.toLowerCase().includes(term)).slice(0,9);
    activeMatch=0;
    $('#launcherResults').innerHTML=matching.length?matching.map((a,i)=>`<button class="launcher-result ${i===0?'active':''}" type="button" data-match="${i}"><svg><use href="#${a.icon}"/></svg><span>${a.name}</span><small>${a.type}</small></button>`).join(''):'<div style="color:#9490aa;padding:12px 15px;font-size:12px">Nothing found. Try “projects”.</div>';
  }
  function selectMatch(item){if(!item)return;hideLauncher();if(item.type==='APP')openApp(item.id);if(item.type==='LINK')window.open('resume.html','_blank','noopener,noreferrer');if(item.type==='PROJECT'){openApp('projects');setTimeout(()=>openProject(item.id),100);}}
  function showLauncher(){const el=$('#launcher');el.hidden=false;$('#launcherInput').value='';drawMatches();setTimeout(()=>$('#launcherInput').focus(),20);}
  function hideLauncher(){$('#launcher').hidden=true;}
  $('#launcher').addEventListener('click',e=>{if(e.target.id==='launcher')hideLauncher();const result=e.target.closest('[data-match]');if(result)selectMatch(matching[Number(result.dataset.match)]);});
  $('#launcherInput').addEventListener('input',drawMatches);
  $('#launcherInput').addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();activeMatch=(activeMatch+(e.key==='ArrowDown'?1:-1)+matching.length)%Math.max(1,matching.length);$$('.launcher-result').forEach((node,i)=>node.classList.toggle('active',i===activeMatch));}
    if(e.key==='Enter'){e.preventDefault();selectMatch(matching[activeMatch]);}
  });
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();showLauncher();}
    if(e.key==='Escape'){
      if(!$('#launcher').hidden){hideLauncher();return;}
      if(!$('#boot').classList.contains('is-hidden')){setBoot(false);return;}
      if(!$('#projectDetail').hidden){resetDetail();return;}
      const open=$$('.app-window.is-open').sort((a,b)=>Number(b.style.zIndex||0)-Number(a.style.zIndex||0))[0];
      if(open)closeApp(open.dataset.window);
    }
  });
  function drawClock(){
    try{const now=new Date();$('#clock').textContent=new Intl.DateTimeFormat('en-GB',{weekday:'short',day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',hour12:false}).format(now).replace(',',' ·');}catch(_){}
  }
  if (location.hash==='#projects') { setBoot(false); openApp('projects'); }
  drawClock();setInterval(drawClock,30_000);

  // Decorative stars: local canvas, no external graphics service or GPU library needed.
  const canvas=$('#stars'),ctx=canvas.getContext('2d');
  if(ctx){
    let stars=[],w=0,h=0,frame=0;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    function resize(){
      const dpr=Math.min(window.devicePixelRatio||1,2);
      w=canvas.clientWidth;h=canvas.clientHeight;
      canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
      stars=Array.from({length:Math.min(130,Math.max(45,Math.floor(w*h/16000)))},()=>({x:Math.random()*w,y:Math.random()*h,r:.35+Math.random()*.75,p:Math.random()*Math.PI*2}));
      draw();
    }
    function draw(){ctx.clearRect(0,0,w,h);stars.forEach(s=>{ctx.globalAlpha=.12+.23*(1+Math.sin(s.p+frame/60))/2;ctx.fillStyle='#e4d8ff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()});ctx.globalAlpha=1;}
    function tick(){frame++;draw();if(!reduced.matches&&!document.hidden)requestAnimationFrame(tick);}
    window.addEventListener('resize',resize);resize();if(!reduced.matches)requestAnimationFrame(tick);
  }
})();
