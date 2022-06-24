import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import style from "./Card.module.scss"
import { NewsContext } from '../../context/NewsContext'

function Card({card}) {
    const [category,setCategory] = useState("")
    const {categories} = useContext(NewsContext)
    
    useEffect(()=>{
        let cat = categories?.find(a=>a.id === +card.categoryID);
        setCategory(cat)
    },[categories])
  return (
    <div className={style.cardCont}>
      <img alt='card' src={card.urlToImage} /> 
      <section className={style.content}>
        <h3 className={style.title}>{`${card.title.slice(0,65)} ${card.title.length > 70 && "....."}`}</h3>
        <section className='d-flex justify-content-start align-items-center'>
            <FontAwesomeIcon icon={faCalendarWeek} color='#0eceff' width={18} height={20} style={{marginRight:"10px"}} />
            <span>{moment(card.publishedDate).format('ddd DD MMM YYYY')}</span>
        </section>
        <section className='d-flex justify-content-between align-items-center'>
            <span className={style.catName}>{category?.name}</span>
            <span>
                <FontAwesomeIcon icon={faHeart} color='#0eceff' width={18} height={20} style={{marginRight:"8px"}} />
                <FontAwesomeIcon icon={faShareNodes}  color='#0eceff' width={18} height={20} />
            </span>
        </section>
      </section>
    </div>
  )
}

export default Card