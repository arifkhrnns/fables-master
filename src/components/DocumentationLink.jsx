import React from 'react';

// Wording and visual treatment from the article cards in baseline ee33d1f.
export default function DocumentationLink({href}) {
  return <div className="documentation-card" style={{width:'100%',maxWidth:300,margin:'auto',textAlign:'center',padding:20,borderRadius:10,background:'linear-gradient(135deg, #6b73ff, #000dff)',boxShadow:'0 4px 10px rgba(0,0,0,.2)'}}>
    <p style={{color:'#fff',fontStyle:'italic',fontFamily:'Arial, sans-serif',fontSize:16,margin:'10px 0'}}>Jelajahi lebih banyak dokumentasi kami di sini:</p>
    <a href={href} target="_blank" rel="noopener noreferrer" style={{display:'inline-block',textDecoration:'none',backgroundColor:'#fff',color:'#000dff',fontSize:14,fontWeight:'bold',padding:'10px 20px',borderRadius:5}}>DOKUMENTASI</a>
  </div>;
}
