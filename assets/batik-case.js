(() => {
  'use strict';
  const mediaRoot = '../assets/media/batik/';
  const lightbox = document.getElementById('batikLightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('p');
  const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ''; };

  // V4.3: images are decoded with an actual <img>, not just an HTTP HEAD check.
  // All gallery images load eagerly; the entire media set is modest in size, and
  // this avoids lazy-loading deadlocks in hidden/positioned components on mobile.
  const extensions = ['png', 'jpg', 'jpeg', 'webp'];
  function imageCandidates(filename) {
    const match = /^([a-z0-9][a-z0-9-]*)\.(jpg|jpeg|png|webp)$/i.exec(filename || '');
    if (!match) return [];
    const requested = match[2].toLowerCase();
    // Prefer PNG in this collection, which primarily consists of PNG exports.
    return [...new Set(['png', requested, ...extensions])]
      .map(extension => mediaRoot + match[1] + '.' + extension);
  }
  function enableLightbox(img, box) {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Enlarge: ' + img.alt);
    const open = () => {
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = box.querySelector('figcaption')?.textContent || img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('button').focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  }
  function pdfFallback(box, name, alt) {
    if (!box.closest('.b-certificate-gallery')) return;
    const basename = name.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const url = mediaRoot + basename + '.pdf';
    fetch(url, {method: 'HEAD'}).then(response => {
      if (!response.ok) return;
      const link = document.createElement('a');
      link.className = 'b-pdf-link';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Open PDF: ' + alt);
      link.innerHTML = '<span class="b-pdf-icon" aria-hidden="true">▤</span><strong>VIEW CERTIFICATE</strong><small>OPEN PDF ↗</small>';
      box.append(link);
      box.classList.add('b-pdf-ready');
      box.querySelector('.b-empty')?.setAttribute('hidden', '');
    }).catch(() => {});
  }

  const mediaElements = [...document.querySelectorAll('[data-img]')];
  mediaElements.forEach(box => {
    const candidates = imageCandidates(box.dataset.img);
    if (!candidates.length) return;
    const picture = document.createElement('img');
    picture.className = 'b-asset';
    picture.alt = box.dataset.alt || 'Batik Studio project image';
    picture.decoding = 'async';
    picture.loading = 'eager';
    // Always attach the img element before setting src. The CSS keeps it faded
    // until onload, so failed requests still show the designed placeholder.
    box.insertBefore(picture, box.firstChild);
    let index = 0;
    picture.addEventListener('load', () => {
      if (!picture.naturalWidth) return;
      box.hidden = false;
      box.classList.add('b-loaded');
      box.dataset.mediaStatus = 'loaded';
      box.dataset.loadedImage = picture.currentSrc || picture.src;
      enableLightbox(picture, box);
    }, {once: true});
    picture.addEventListener('error', () => {
      index++;
      if (index < candidates.length) {
        picture.src = candidates[index];
        return;
      }
      picture.remove();
      box.dataset.mediaStatus = 'failed';
      pdfFallback(box, box.dataset.img, picture.alt);
    });
    picture.src = candidates[index];
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
