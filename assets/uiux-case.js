(()=>{
 const buttons=[...document.querySelectorAll('[data-gallery-index]')]; const lightbox=document.getElementById('lightbox'); const photo=document.getElementById('lightbox-image'); const caption=document.getElementById('lightbox-caption'); let current=-1; let prevFocus=null;
 const show=(i)=>{if(!buttons.length)return;current=(i+buttons.length)%buttons.length;let b=buttons[current];photo.src=b.querySelector('img').src;photo.alt=b.querySelector('img').alt;caption.textContent=`${current+1} / ${buttons.length} — ${b.dataset.caption}`;lightbox.hidden=false;document.body.style.overflow='hidden';document.getElementById('lightbox-close').focus();};
 const close=()=>{lightbox.hidden=true;photo.removeAttribute('src');document.body.style.overflow='';current=-1;prevFocus?.focus();};
 buttons.forEach((b,i)=>b.addEventListener('click',()=>{prevFocus=b;show(i)}));
 document.getElementById('lightbox-close').addEventListener('click',close);document.getElementById('lightbox-prev').addEventListener('click',()=>show(current-1));document.getElementById('lightbox-next').addEventListener('click',()=>show(current+1));
 lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
 window.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1);});
})();