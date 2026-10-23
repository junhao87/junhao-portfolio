(() => {
  const $=id=>document.getElementById(id);
  const key=document.body.dataset.project;
  const info=window.JH_CONTENT?.projects?.[key];
  if (!info) { $('csName').textContent='Project not found'; return; }
  const set=(id,val)=>{const el=$(id);if(el)el.textContent=val || '';};
  set('csNumber',`${info.number} / SELECTED CASE STUDY`);
  set('csName',info.name);set('csTagline',info.tagline);set('csYear',info.year);set('csKind',info.kind);
  set('csSummary',info.summary);set('csChallenge',info.challenge);set('csApproach',info.approach);
  set('csContribution',info.contribution);set('csResult',info.result);set('csNote',info.note);
  document.title=`${info.name} — Chong Jun Hao`;
  $('csTags').replaceChildren(...info.tags.map(tag=>{const span=document.createElement('span');span.textContent=tag;return span;}));
  $('csSteps').replaceChildren(...info.process.map(([no,title,desc])=>{
    const item=document.createElement('article');item.className='cs-step';
    const n=document.createElement('span');n.textContent=no;
    const h=document.createElement('h3');h.textContent=title;
    const p=document.createElement('p');p.textContent=desc;
    item.append(n,h,p);return item;
  }));
  const ids=Object.keys(window.JH_CONTENT.projects);
  const next=window.JH_CONTENT.projects[ids[(ids.indexOf(key)+1)%ids.length]];
  $('csNext').href=`${next.slug}.html`;$('csNext').textContent=`NEXT: ${next.name.toUpperCase()} ↗`;
  // Paths in portfolio-data.js are relative to the repository root; project pages are one level deeper.
  const relative=path=>'../'+path.replace(/^\/+/, '');
  function loadPhoto(containerId,path,description){
    if(!path)return;
    const parent=$(containerId), img=new Image();img.className='media-image';img.alt=description;img.loading=containerId==='csCover'?'eager':'lazy';img.decoding='async';
    img.addEventListener('load',()=>{parent.append(img);parent.classList.add('media-loaded');});
    img.src=relative(path);
  }
  loadPhoto('csCover',info.media.cover,`${info.name} project cover`);
  loadPhoto('csScreen1',info.media.screen1,`${info.name} screenshot one`);
  loadPhoto('csScreen2',info.media.screen2,`${info.name} screenshot two`);
  const videoSlot=$('csVideo');
  if(info.media.video){
    const v=document.createElement('video');v.controls=true;v.preload='metadata';v.playsInline=true;v.setAttribute('aria-label',`${info.name} demonstration video`);
    v.addEventListener('loadedmetadata',()=>{videoSlot.append(v);videoSlot.classList.add('media-loaded');});
    v.addEventListener('error',()=>{v.remove();});
    v.src=relative(info.media.video);
  }
})();
