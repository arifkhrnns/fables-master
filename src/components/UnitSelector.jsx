import React, {useState} from 'react';
export default function UnitSelector({units}) {
  const [selected, setSelected] = useState(0);
  const unit=units[selected];
  return <div className="unit-container mt-4"><div className="unit-left"><div id="unit-content" aria-live="polite"><img className="unit-logo-left" src={unit.logo} alt={unit.title} /><h3 className="unit-title">{unit.title}</h3><p className="unit-description">{unit.description}</p></div></div><div className="unit-right">{units.map((u,i)=><button key={u.title} type="button" className={`unit-card ${selected===i?'active':''}`} aria-pressed={selected===i} onClick={()=>setSelected(i)}><img className="unit-logo" src={u.logo} alt="" /><p className="unit-name">{u.label}</p></button>)}</div></div>;
}
