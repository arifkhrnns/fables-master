import React, {useEffect, useRef} from 'react';
let instagramReady;
export default function InstagramEmbed({url}) {
  const host=useRef(null);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      if(!entries.some(entry=>entry.isIntersecting))return;
      observer.disconnect();
      if(!instagramReady)instagramReady=new Promise(resolve=>{
        if(window.instgrm)return resolve();
        const script=document.createElement('script');script.src='https://www.instagram.com/embed.js';script.async=true;script.onload=resolve;script.onerror=()=>resolve();document.body.appendChild(script);
      });
      instagramReady.then(()=>window.instgrm?.Embeds.process());
    },{rootMargin:'200px'});
    observer.observe(host.current);return()=>observer.disconnect();
  },[]);
  return <div ref={host} className="instagram-container"><blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"><a href={url} target="_blank" rel="noopener noreferrer">Lihat postingan SIT Ulil Albab di Instagram</a></blockquote></div>;
}
