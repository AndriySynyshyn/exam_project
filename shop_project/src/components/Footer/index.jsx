import React from 'react'
import classes from './style.module.css'
import instagramIcon from '../../pictures/icon-instagram.png'
import whatsappIcon from '../../pictures/icons-whatsapp.png'
import mapPic from "../../pictures/map.png"

export default function Footer() {
  return (
    <footer>
        <div className={classes.footerContainer}>
            <div className={classes.contactSection}>
                <h2 style={{fontSize: "40px"}}>Contact</h2>
                <h1 style={{fontSize: "70px", lineHeight: "91px"}}>+49 999 999 99 99</h1>
                <div className={classes.icons}>
                    <div style={{display: "grid", justifyItems: "center"}}>
                        <img src={instagramIcon} alt="instagram icon"/>
                        <p>Instagram</p>
                    </div>
                    <div style={{display: "grid", justifyItems: "center"}}>
                        <img src={whatsappIcon} alt="whatsup icon" />
                        <p>WhatsApp</p>
                    </div>
                </div>
            </div>
            <div className={classes.addressSection}>
                <h2 style={{fontSize: "40px"}}>Address</h2>
                <p style={{fontSize: "40px", lineHeight: "52px", textDecoration: "underline", fontWeight: "600"}}>LinkstraBe 2, 8 OG, 10785, Berlin Deutschland</p>
                <div>
                    <p style={{fontSize: "18px", lineHeight: "23.4px"}}>Working Hours:</p>
                    <p style={{fontSize: "24px", fontWeight: "600", lineHeight: "31.2px"}}>24 hours a day</p>
                </div>
            </div>
        </div>
        <div style={{display: "grid", alignItems: "center", justifyItems: "center"}}>
            <img src={mapPic} alt="map" />
        </div>

    </footer>
  )
}

