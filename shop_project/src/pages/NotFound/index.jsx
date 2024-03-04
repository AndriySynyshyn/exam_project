import React from 'react'
import notfound from "../../pictures/notfound.png"

export default function NotFound() {
  return (
    <div style={{display: "grid"}}>
        <img src={notfound} alt="not-found" style={{alignSelf: 'center', justifySelf: 'center'}}/>
    </div>
  )
}