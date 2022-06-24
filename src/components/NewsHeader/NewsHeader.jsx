import React from 'react'
import NewsCategories from '../NewsCategories/NewsCategories'
import style from "./NewsHeader.module.scss"
function NewsHeader() {
  return (
    <div className={style.container}>
        <p className={style.cat}>Media</p>
        <h1 className={style.title}>Top News</h1>
        <NewsCategories />
    </div>
  )
}

export default NewsHeader