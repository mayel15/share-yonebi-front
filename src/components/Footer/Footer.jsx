import React from "react";
import './Footer.css'

export default function Footer() {
  var date = new Date().getFullYear()
  var text_footer = date + " | Fait avec 💖 par"

  return (
      <div className="text-center footer">
        <div>share.yonebi. <i class="fa-solid fa-signs-post"></i> © {text_footer}  <a href='https://www.linkedin.com/in/pape-mayel-diagne-thiam/'>Pape</a>  </div>
      </div>
  )
}