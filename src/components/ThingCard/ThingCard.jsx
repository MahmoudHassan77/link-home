import React from 'react'
import style from "./ThingCard.module.scss"
function ThingCard({src, title}) {
  return (
    <div style={{backgroundImage: `url(${src})`, position:"relative"}} className={style.card}><span className={style.title}>{title}</span></div>
  )
}

export default ThingCard