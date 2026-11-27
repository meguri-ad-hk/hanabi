(()=>{'use strict';
const header=document.querySelector('.site-header'),toggle=document.querySelector('.menu-toggle');
function onScroll(){header?.classList.toggle('is-fixed',scrollY>90)} window.addEventListener('scroll',onScroll,{passive:true});onScroll();
toggle?.addEventListener('click',()=>toggle.setAttribute('aria-expanded',String(header.classList.toggle('menu-open'))));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('menu-open');toggle?.setAttribute('aria-expanded','false')}));
const panel=document.querySelector('#border-panel'),photo=document.querySelector('#bp-photo');if(!panel||!photo)return;
const tabs=[...document.querySelectorAll('.bp-tab')],slides=[...photo.querySelectorAll('.bp-slide')],articles=[...panel.querySelectorAll('.bp-product-content')],arrows=[...photo.querySelectorAll('.bp-gallery-arrow')],dots=panel.querySelector('.bp-product-dots'),caption=panel.querySelector('.bp-location-caption');
const sc=document.documentElement.lang==='zh-CN',media=document.querySelector('h1').textContent.trim();let cat=0,index=0;const group=()=>slides.filter(s=>Number(s.dataset.category)===cat);
function render(){const current=group(), slide=current[index];if(!slide)return;
 tabs.forEach((t,i)=>{t.setAttribute('aria-selected',String(i===cat));t.tabIndex=i===cat?0:-1});if(tabs.length)panel.setAttribute('aria-labelledby',tabs[cat].id);
 slides.forEach(s=>s.hidden=s!==slide);articles.forEach(a=>a.hidden=a.dataset.product!==slide.dataset.product);
 arrows.forEach(a=>a.hidden=current.length<2);dots.hidden=current.length<2;
 if(dots.children.length!==current.length){dots.replaceChildren();current.forEach((s,i)=>{const b=document.createElement('button');b.className='bp-product-dot';b.type='button';b.setAttribute('aria-label',s.querySelector('img').alt);b.title=s.querySelector('img').alt;b.addEventListener('click',()=>{index=i;render()});dots.append(b)})}else{current.forEach((s,i)=>{dots.children[i].setAttribute('aria-label',s.querySelector('img').alt);dots.children[i].title=s.querySelector('img').alt})}
 [...dots.children].forEach((d,i)=>d.setAttribute('aria-pressed',String(i===index)));caption.textContent=slide.dataset.caption||'';caption.hidden=!caption.textContent;
 const a=articles.find(a=>a.dataset.product===slide.dataset.product);const title=a.querySelector('h3').textContent;const en=a.querySelector('[lang=en]').textContent;
 const url='https://wa.me/85254018023?text='+encodeURIComponent((sc?'你好 HANABI，我想查询':'你好 HANABI，我想查詢')+media+'：'+title+'（'+en+'）');document.querySelector('.bp-contact').href=url;const wa=document.querySelector('a.whatsapp');if(wa)wa.href=url;
}
function step(d){index=(index+d+group().length)%group().length;render()}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>{cat=i;index=0;render()});t.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();cat=e.key==='Home'?0:e.key==='End'?tabs.length-1:(cat+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length;index=0;render();tabs[cat].focus()})});
arrows.forEach(b=>{b.addEventListener('click',()=>step(Number(b.dataset.step)));b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();step(e.key==='ArrowLeft'?-1:1)}})});
let sx,sy;photo.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});photo.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)step(dx<0?1:-1)},{passive:true});
render();panel.classList.add('bp-enhanced');
const wa=document.querySelector('a.whatsapp'),areas=document.querySelectorAll('.related-media-grid, footer .footer-links');if('IntersectionObserver' in window&&wa&&areas.length){const visible=new Set();const obs=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?visible.add(e.target):visible.delete(e.target));wa.classList.toggle('is-navigation-clear',visible.size>0)},{rootMargin:'0px 0px -15px 0px'});areas.forEach(a=>obs.observe(a))}
})();
