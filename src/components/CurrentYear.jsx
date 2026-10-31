import React, {useEffect, useState} from 'react';
export default function CurrentYear({initialYear}) {
  const [year,setYear]=useState(initialYear);
  useEffect(()=>setYear(new Date().getFullYear()),[]);
  return year;
}
