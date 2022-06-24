import React, { useState } from 'react'
import style from "./Category.module.scss"

const Category = ({cat, activeTab, handleClick}) => {
    return(
        <button className={`${style.btn} ${activeTab === cat.id && style.active}`} onClick={()=>handleClick(cat.id)}>{cat.name}</button>
    )
}
export default Category