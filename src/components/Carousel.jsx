import React, {Children, useEffect, useRef, useState} from 'react';

export default function Carousel({children, className = '', interval = 5000, label, ...props}) {
  const items = Children.toArray(children).filter(x => typeof x !== 'string' || x.trim());
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1024);
  const touch = useRef(null);
  const multi = className.includes('ekstra-carousel');
  const alumni = className.includes('alumni-carousel');
  const visible = Math.min(items.length, multi ? (viewportWidth < 768 ? 2 : 3) : alumni ? (viewportWidth < 480 ? 2 : viewportWidth < 768 ? 3 : viewportWidth < 1024 ? 4 : 5) : 1);
  const max = Math.max(0, items.length - visible);
  const move = direction => setIndex(i => (i + direction + max + 1) % (max + 1));
  useEffect(() => {const update=()=>{setViewportWidth(window.innerWidth);setIndex(0);};update();window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update);}, []);
  useEffect(() => {
    if(paused || multi || !max || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex(i => (i + 1) % (max + 1)), interval);
    return () => clearInterval(timer);
  }, [paused, multi, max, interval]);
  return <div {...props} className={`${className.replace(/\bowl-carousel\b/g,'')} react-carousel`} role="region" aria-roledescription="karusel" aria-label={label || (multi ? 'Ekstrakurikuler' : 'Galeri sorotan')} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}}} onTouchStart={e=>{touch.current=e.touches[0].clientX;setPaused(true);}} onTouchEnd={e=>{if(touch.current!==null){const d=e.changedTouches[0].clientX-touch.current;if(Math.abs(d)>40)move(d<0?1:-1);touch.current=null;}}}>
    <div className="react-carousel-window"><div className="react-carousel-track" style={{transform:`translateX(-${index * 100 / visible}%)`}}>
      {items.map((item,i)=><div className="react-slide" key={i} style={{flex:`0 0 ${100 / visible}%`}} aria-hidden={i<index||i>=index+visible} inert={i<index||i>=index+visible}>{item}</div>)}
    </div></div>
    {max > 0 && <div className="carousel-controls">
      <button type="button" onClick={()=>{setPaused(true);move(-1);}} aria-label="Slide sebelumnya">‹</button>
      <div className="owl-dots">{Array.from({length:max+1},(_,i)=><button type="button" key={i} className={`owl-dot ${i===index?'active':''}`} aria-label={`Tampilkan slide ${i+1}`} aria-pressed={i===index} onClick={()=>{setPaused(true);setIndex(i);}}><span /></button>)}</div>
      <button type="button" onClick={()=>{setPaused(true);move(1);}} aria-label="Slide berikutnya">›</button>
      {!multi && <button type="button" className="carousel-pause" onClick={()=>setPaused(!paused)} aria-label={paused?'Putar otomatis':'Jeda otomatis'}>{paused?'▶':'Ⅱ'}</button>}
    </div>}
  </div>;
}
