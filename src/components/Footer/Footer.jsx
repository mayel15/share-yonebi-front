import React from "react";
import './Footer.css'

export default function Footer() {
  var date = new Date().getFullYear()
  var text_footer = date + " | Tous droits réservés"

  return (
      <div className="text-center footer">
        <div>yonebi. <i class="fa-solid fa-signs-post"></i> © {text_footer}</div>
      </div>
  )
}