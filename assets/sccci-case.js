(() => {
  'use strict';
  const root = new URL('../assets/media/sccci/', document.baseURI);
  const lightbox = document.getElementById('sLightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxCaption = lightbox?.querySelector('p');
  const closeButton = lightbox?.querySelector('.s-lightbox-close');
  let previousFocus = null;
  const imageTypes = ['png','jpg','jpeg','webp'];
  const photoBoxes = document.querySelectorAll('[data-media]');
  function paths(name) {
    if (!/^[a-z0-9-]+$/i.test(name)) return [];
    return imageTypes.map(ext => new URL(name + '.' + ext, root).href);
  }
  function close() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
    previousFocus?.focus?.();
  }
  function open(img, box) {
    if (!lightbox || !lightboxImage) return;
    previousFocus = document.activeElement;
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = box.querySelector('figcaption')?.textContent || img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }
  photoBoxes.forEach(box => {
    const optional = box.classList.contains('s-optional');
    if (optional) box.hidden = true;
    const candidates = paths(box.dataset.media || '');
    if (!candidates.length) return;
    let i=0;
    const img = document.createElement('img');
    img.alt = box.dataset.alt || 'SCCCI AI Theatre project photograph';
    img.loading = 'eager';
    img.decoding = 'async';
    img.tabIndex = 0;
    img.setAttribute('role','button');
    img.setAttribute('aria-label','Enlarge: ' + img.alt);
    img.addEventListener('load', () => {
      if (!img.naturalWidth) return;
      box.classList.add('s-loaded');
      box.dataset.mediaStatus='loaded';
      if (optional) box.hidden = false;
    }, {once:true});
    img.addEventListener('error', () => {
      i++;
      if (i<candidates.length) img.src=candidates[i];
      else { img.remove(); box.dataset.mediaStatus='missing'; if(optional)box.hidden=true; }
    });
    img.addEventListener('click', () => open(img,box));
    img.addEventListener('keydown', e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();open(img,box);}});
    box.insertBefore(img,box.querySelector('figcaption') || null);
    img.src=candidates[0];
  });
  closeButton?.addEventListener('click',close);
  lightbox?.addEventListener('click',e => {if (e.target===lightbox) close();});
  document.addEventListener('keydown', e => {
    if (e.key==='Escape') close();
    if (!lightbox?.hidden && e.key==='Tab') {
      e.preventDefault();closeButton.focus();
    }
  });
  const demo=document.getElementById('sDemo');
  const videoBox=document.getElementById('sVideo');
  if(demo && videoBox){
    demo.hidden=true;
    const video=document.createElement('video');
    video.controls=true;video.playsInline=true;video.preload='metadata';
    video.setAttribute('aria-label','SCCCI AI Theatre demonstration');
    video.addEventListener('loadedmetadata',()=>{videoBox.replaceChildren(video);demo.hidden=false;},{once:true});
    video.addEventListener('error',()=>{demo.hidden=true;video.remove();},{once:true});
    video.src=new URL('demo.mp4',root).href;
  }
})();
