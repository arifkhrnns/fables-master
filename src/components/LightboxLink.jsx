import React, {useEffect, useRef, useState} from 'react';
export default function LightboxLink({children, href, ...props}) {
  const [open,setOpen]=useState(false);const dialog=useRef(null);
  useEffect(()=>{if(open)dialog.current?.showModal();},[open]);
  return <><a {...props} href={href} onClick={e=>{e.preventDefault();setOpen(true);}}>{children}</a>{open&&<dialog className="school-lightbox" ref={dialog} onClose={()=>setOpen(false)} onClick={e=>{if(e.target===dialog.current)dialog.current.close();}}><button autoFocus type="button" aria-label="Tutup gambar" onClick={()=>dialog.current.close()}>×</button><img src={href} alt={props.title||'Galeri kegiatan Ulil Albab'} /></dialog>}</>;
}
