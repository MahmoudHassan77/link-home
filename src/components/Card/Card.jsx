import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCalendar } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import style from "./Card.module.scss"
import { NewsContext } from '../../context/NewsContext'
import shareIcon from "../../photos/share.svg"

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
            <FontAwesomeIcon icon={faCalendar} color='#0eceff' style={{marginRight:"10px"}} />
            <span>{moment(card.publishedDate).format('ddd DD MMM YYYY')}</span>
        </section>
        <section className='d-flex justify-content-between align-items-center'>
            <span className={style.catName}>{category?.name}</span>
            <span>
                <FontAwesomeIcon icon={faHeart} color='#0eceff' style={{fontSize:"14px", marginRight:"8px"}} />
                <img alt="share" src={shareIcon} style={{width:"16px",height:"16px"}}/>
            </span>
        </section>
      </section>
    </div>
  )
}

export default Card