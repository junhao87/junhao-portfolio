(() => {
  'use strict';
  const mediaRoot = '../assets/media/batik/';
  const lightbox = document.getElementById('batikLightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('p');
  const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ''; };

  // The original site expected JPG files only. This release accepts untouched PNG/JPG/JPEG/WebP uploads.
  function imageCandidates(name) {
    const m = /^([a-z0-9][a-z0-9-]*)\.(jpg|jpeg|png|webp)$/i.exec(name || '');
    if (!m) return [];
    const ext = m[2].toLowerCase();
    return [ext, ...['png', 'jpg', 'jpeg', 'webp'].filter(x => x !== ext)].map(x => mediaRoot + m[1] + '.' + x);
  }
  const mediaElements = [...document.querySelectorAll('[data-img]')];
  mediaElements.forEach(box => {
    const candidates = imageCandidates(box.dataset.img);
    if (!candidates.length) return;
    let idx = 0;
    const picture = new Image();
    picture.className = 'b-asset';
    picture.alt = box.dataset.alt || 'Batik Studio project image';
    picture.decoding = 'async';
    picture.loading = (box.classList.contains('b-hero-visual') || box.hasAttribute('hidden')) ? 'eager' : 'lazy';
    // V4.2 fix: register the image in the DOM BEFORE starting its load.
    // Detached images with loading='lazy' can remain unrequested indefinitely.
    picture.style.visibility = 'hidden';
    box.insertBefore(picture, box.firstChild);
    picture.addEventListener('load', () => {
      picture.style.visibility = '';
      box.hidden = false;
      box.classList.add('b-loaded');
      picture.tabIndex = 0;
      picture.setAttribute('role', 'button');
      picture.setAttribute('aria-label', 'Enlarge: ' + picture.alt);
      const open = () => {
        lightboxImg.src = picture.currentSrc || picture.src;
        lightboxImg.alt = picture.alt;
        lightboxCaption.textContent = box.querySelector('figcaption')?.textContent || picture.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('button').focus();
      };
      picture.addEventListener('click', open);
      picture.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    }, {once: true});
    picture.addEventListener('error', () => {
      if (++idx < candidates.length) { picture.src = candidates[idx]; return; }
      picture.remove();  // Keep the styled placeholder instead of a broken image.
      // PDF certificates: show a usable document card without image conversion.
      if (box.closest('.b-certificate-gallery')) {
        const basename = box.dataset.img.replace(/\.(jpg|jpeg|png|webp)$/i, '');
        const url = mediaRoot + basename + '.pdf';
        fetch(url, {method: 'HEAD'}).then(r => {
          if (!r.ok) return;
          const link = document.createElement('a');
          link.className = 'b-pdf-link';
          link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
          link.setAttribute('aria-label','Open PDF: '+ picture.alt);
          link.innerHTML = '<span class="b-pdf-icon" aria-hidden="true">▤</span><strong>VIEW CERTIFICATE</strong><small>OPEN PDF ↗</small>';
          box.append(link); box.classList.add('b-pdf-ready');
          box.querySelector('.b-empty')?.setAttribute('hidden','');
        }).catch(()=>{});
      }
    });
    picture.src = candidates[idx];
  });

  // Demo is genuinely optional; omit the whole section until demo.mp4 is uploaded.
  const videoBox = document.getElementById('batikDemo');
  if (videoBox) {
    const section = videoBox.closest('.b-video-section');
    section.hidden = true;
    const video = document.createElement('video');
    video.preload = 'metadata'; video.controls = true; video.playsInline = true;
    video.setAttribute('aria-label','Batik Studio demonstration video');
    video.addEventListener('loadedmetadata', () => {
      videoBox.appendChild(video); videoBox.classList.add('b-loaded'); section.hidden = false;
    }, {once: true});
    video.addEventListener('error', () => video.remove(), {once: true});
    video.src = mediaRoot + 'demo.mp4';
  }
  lightbox.querySelector('.b-lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });
})();
