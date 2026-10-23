(() => {
  'use strict';
  const mediaRoot = '../assets/media/batik/';
  const mediaElements = Array.from(document.querySelectorAll('[data-img]'));
  const lightbox = document.getElementById('batikLightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('p');
  const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ''; };
  mediaElements.forEach(box => {
    const file = box.dataset.img;
    if (!/^[a-z0-9][a-z0-9-]*\.(jpg|jpeg|png|webp)$/i.test(file)) return;
    const image = new Image();
    image.className = 'b-asset';
    image.alt = box.dataset.alt || 'Batik Studio project image';
    image.decoding = 'async';
    image.loading = box.classList.contains('b-hero-visual') ? 'eager' : 'lazy';
    image.addEventListener('load', () => {
      box.insertBefore(image, box.firstChild);
      box.classList.add('b-loaded');
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', 'Enlarge: ' + image.alt);
      const open = () => {
        lightboxImg.src = image.currentSrc || image.src;
        lightboxImg.alt = image.alt;
        lightboxCaption.textContent = box.querySelector('figcaption')?.textContent || image.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('button').focus();
      };
      image.addEventListener('click', open);
      image.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();open();} });
    }, { once: true });
    image.src = mediaRoot + file;
  });
  const videoBox = document.getElementById('batikDemo');
  if (videoBox) {
    const video = document.createElement('video');
    video.preload='metadata';video.controls=true;video.playsInline=true;
    video.setAttribute('aria-label','Batik Studio product demonstration video');
    video.addEventListener('loadedmetadata',()=>{ videoBox.appendChild(video);videoBox.classList.add('b-loaded'); });
    video.addEventListener('error',()=>{video.remove();});
    video.src=mediaRoot+'demo.mp4';
  }
  lightbox.querySelector('.b-lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e=>{ if(e.target===lightbox)closeLightbox(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape' && !lightbox.hidden)closeLightbox(); });
})();