(() => {
  'use strict';
  const root = new URL('../assets/media/nanao/', document.baseURI);
  const formats = ['png', 'jpg', 'jpeg', 'webp'];
  const aliases = {
    'cover':['cover','project-cover','hero'],
    'app-01':['app-01','screenshot-01','01'],
    'app-02':['app-02','screenshot-02','02'],
    'app-03':['app-03','screenshot-03','03'],
    'app-04':['app-04','screenshot-04','04'],
    'exhibition':['exhibition','event','exhibition-photo'],
    'digitex-silver':['digitex-silver','award-silver','digitex-certificate'],
    'times-young-creative':['times-young-creative','times-award','times-certificate']
  };
  const modal = document.getElementById('mLightbox');
  const modalImg = modal.querySelector('img');
  const modalCaption = modal.querySelector('p');
  const modalClose = modal.querySelector('button');
  let priorFocus;
  function fileCandidates(name) {
    const bases = aliases[name] || [name];
    return bases.flatMap(base => formats.map(ext => new URL(base+'.'+ext, root).href));
  }
  function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    priorFocus?.focus?.();
  }
  function open(image, figure) {
    priorFocus = document.activeElement;
    modalImg.src = image.currentSrc || image.src;
    modalImg.alt = image.alt;
    modalCaption.textContent = figure.querySelector('figcaption')?.textContent || image.alt;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }
  document.querySelectorAll('[data-media]').forEach(figure => {
    const name = figure.getAttribute('data-media') || '';
    if (!/^[a-z0-9-]+$/i.test(name)) return;
    const candidates = fileCandidates(name);
    let next = 0;
    const img = document.createElement('img');
    img.alt = figure.dataset.alt || 'MindScape Travel project image';
    img.decoding = 'async'; img.loading = 'eager';
    img.tabIndex = 0; img.setAttribute('role','button');
    img.setAttribute('aria-label','Enlarge: '+img.alt);
    // Insert connected image before loading, without opacity:0 or visibility:hidden.
    figure.insertBefore(img, figure.querySelector('figcaption'));
    img.addEventListener('load', () => { if (img.naturalWidth) figure.classList.add('m-loaded'); });
    img.addEventListener('error', () => {
      next += 1;
      if (next < candidates.length) img.src = candidates[next];
      else { img.remove(); figure.dataset.mediaStatus = 'missing'; }
    });
    img.addEventListener('click', () => open(img, figure));
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();open(img,figure);}
    });
    img.src = candidates[0];
  });
  modalClose.addEventListener('click',close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
    if (!modal.hidden && e.key === 'Tab') { e.preventDefault();modalClose.focus(); }
  });
  const box = document.getElementById('mVideoBox');
  const videos = ['demo.mp4','short-demo.mp4'];
  // A missing video keeps a designed placeholder instead of a broken player.
  function tryVideo(index) {
    if (index >= videos.length) return;
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label','MindScape Travel short demonstration');
    video.addEventListener('loadedmetadata', () => {box.replaceChildren(video);}, {once:true});
    video.addEventListener('error', () => {video.remove();tryVideo(index+1);}, {once:true});
    video.src = new URL(videos[index], root).href;
  }
  tryVideo(0);
})();
