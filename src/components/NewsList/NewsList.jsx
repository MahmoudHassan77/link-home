import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../../context/NewsContext';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import style from "./NewsList.module.scss"
function NewsList() {
    const {data} = useFetch({},"d275425a434e02acf2f7");
    const {activeTab} = useContext(NewsContext)
    const [filterData,setFilterData] = useState([]);
    const [visiable,setVisiable] = useState(6);
    
    useEffect(()=>{
        const fData = data?.News?.filter(news=>+news.categoryID === activeTab)
        setFilterData(activeTab === 0 ?data?.News:fData)
    },[data,activeTab])


    const loadMoreCards = () => {
        setVisiable(prev=>prev+3)
    }
  return (
    <>{filterData?.length >0?
        <div className={style.cardList}>
        {filterData && filterData.slice(0,visiable).map(card=>(
            <Card key={card.id} card={card} />
        ))}
        {filterData?.length > visiable && <button className={style.loadMoreBtn} onClick={loadMoreCards}>Load More</button>}
    </div>:<h2 className={style.noNews}>No News</h2>}
    </>
  )
}

export default NewsList