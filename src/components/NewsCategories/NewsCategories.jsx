import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../../context/NewsContext';
import useFetch from '../../hooks/useFetch'
import Category from '../Category/Category';
import style from "./NewsCategories.module.scss"
function NewsCategories() {
    const {activeTab, handleClick,categories} = useContext(NewsContext)
  return (
    <div className={style.categories}>
        <button className={`${style.btn} ${activeTab === 0 && style.active}`} onClick={()=>handleClick(0)}>All</button>
        {
            categories?.length > 0 &&categories.map((cat)=>(
                <Category key={cat.id} cat={cat} activeTab={activeTab} handleClick={handleClick} />
            ))
        }
    </div>
  )
}

export default NewsCategories

