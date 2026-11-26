(() => {
  'use strict';
  const ID='G-QRPTRV4EF6', KEY='hanabi_measurement_consent_v1';
  const sc=document.documentElement.lang.toLowerCase().includes('cn') || location.pathname.includes('zh-cn');
  let choice=null, started=false;
  try { choice=localStorage.getItem(KEY); } catch (_) {}
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments);};
  gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  function start(){
    if(started)return; started=true;
    gtag('consent','update',{analytics_storage:'granted',ad_storage:'granted',ad_user_data:'granted',ad_personalization:'denied'});
    gtag('js',new Date());
    gtag('config',ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
    const tag=document.createElement('script'); tag.async=true; tag.src='https://www.googletagmanager.com/gtag/js?id='+ID; document.head.append(tag);
  }
  if(choice==='yes')start();
  function event(name,params={}){if(choice==='yes'&&started)gtag('event',name,{...params,send_to:ID});}
  document.addEventListener('click',e=>{
    const a=e.target.closest?.('a[href]'); if(!a)return;
    try {const u=new URL(a.href); if(u.hostname==='wa.me' && u.pathname==='/85254018023')event('whatsapp_click',{cta_location:a.classList.contains('whatsapp')?'floating':'inline'});} catch(_){}
  },true);
  function init(){
    const footer=document.querySelector('footer');
    const settings=document.createElement('button'); settings.type='button'; settings.textContent=sc?'Cookie 设置':'Cookie 設定'; settings.className='hanabi-consent-settings';
    if(footer){ const bottom=footer.querySelector('.footer-bottom')||footer; const holder=bottom.querySelector('span:last-child')||bottom; const separator=document.createElement('span'); separator.className='hanabi-consent-separator'; separator.textContent='·'; holder.append(separator,settings); }
    function show(){
      if(document.getElementById('hanabi-consent'))return;
      const panel=document.createElement('aside'); panel.id='hanabi-consent'; panel.setAttribute('aria-label',sc?'网站测量设置':'網站測量設定'); panel.className='hanabi-consent-panel';
      const p=document.createElement('p'); p.className='hanabi-consent-copy'; p.textContent=sc?'我们使用 Google Analytics 和广告测量技术了解网站及广告成效。您可接受或拒绝非必要测量。':'我們使用 Google Analytics 及廣告測量技術了解網站及廣告成效。你可接受或拒絕非必要測量。'; panel.append(p);
      const buttons=document.createElement('div'); buttons.className='hanabi-consent-actions';
      for(const [value,label] of [['yes',sc?'接受测量':'接受測量'],['no',sc?'拒绝':'拒絕']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.className='hanabi-consent-button'+(value==='yes'?' hanabi-consent-accept':'');b.onclick=()=>{const was=choice;choice=value;try{localStorage.setItem(KEY,value);}catch(_){};if(value==='yes')start();else if(started){gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});location.reload();}panel.remove();};buttons.append(b);} panel.append(buttons);document.body.append(panel);
    }
    settings.onclick=show;if(choice!=='yes'&&choice!=='no')show();
    const form=document.getElementById('briefForm'); if(!form)return;
    let busy=false;
    const status=document.createElement('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.className='hanabi-form-status';form.append(status);
    form.addEventListener('submit',async e=>{
      e.preventDefault();if(busy)return;busy=true;const button=form.querySelector('button[type="submit"]');button.disabled=true;status.textContent=sc?'正在提交…':'正在提交…';
      try{const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!response.ok)throw Error('submission failed');const result=await response.json();if(result.ok!==true)throw Error('submission not confirmed');event('generate_lead',{lead_method:'form'});form.reset();status.textContent=sc?'感谢您的查询，我们会尽快与您联系。':'感謝你的查詢，我們會盡快與你聯絡。';}
      catch(_){status.textContent=sc?'暂时未能确认提交，请稍后再试或通过 WhatsApp 联系我们。':'暫時未能確認提交，請稍後再試或透過 WhatsApp 聯絡我們。';}
      finally{busy=false;button.disabled=false;}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
