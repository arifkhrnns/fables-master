import React from 'react';
export default function WhatsAppButton({href}) {
  if (!href) return null;
  return <div className="whatsapp-button"><a href={href} target="_blank" rel="noopener noreferrer"><span>Hubungi Kami</span><img src="/assets/custom/images/whatsapp (1) 2.png" alt="WhatsApp" /></a></div>;
}
