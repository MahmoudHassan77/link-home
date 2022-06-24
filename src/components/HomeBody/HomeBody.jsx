import React, { useEffect, useState } from 'react'
import style from './HomeBody.module.scss'
import playDemo from "../../photos/Play Demo.svg"
import findBtn from "../../photos/findBtn.svg"
import useFetch from '../../hooks/useFetch'
import AnimatedPart from '../AnimatedPart/AnimatedPart'

function HomeBody() {

    const {data} = useFetch([],"fee177346e7875554413");
    const [choosen, setChoosen] = useState(0);
    const [animate, setAnimate] = useState(1);
    const [choosenObject,setChoosenObject] = useState();
    useEffect(()=>{
        setChoosenObject(Object.keys(data).length > 0 && data?.slides[choosen]);
    },[data,choosen])
    const handleClick=(i)=>{
        setChoosen(i);
        setAnimate((prev)=>prev+1);
    }
  return (
    <>
      {choosenObject&&Object.keys(choosenObject).length>0 &&
      <div>
       <AnimatedPart color={choosenObject?.colorCode??"#000"} />
        <div className={style.bodyContainer}>
        <section className={style.body}>
            <p className={style.category} style={{color:`#${choosenObject?.colorCode??"000"}`}}>{choosenObject.category??""}</p>
            <h1 className={style.title}>{choosenObject?.title??""}</h1>
            
            <p className={style.description}>{choosenObject?.brief??""}</p>
            <div>   
                <a href='https://www.google.com' target="_blank" rel='noreferrer'><img className={style.findBtn} alt='findBtn' src={findBtn} /></a>
                <a href='https://www.google.com' target="_blank"  rel='noreferrer'><img  className={style.playDemo} alt='playDemo' src={playDemo} /></a>
            </div>    
            <section className={style.slider}>
                <div className={`${style.sliderNav} ${choosen===0&& style.focus}`} onClick={()=>handleClick(0)}></div>
                <span>.......</span>
                <div className={`${style.sliderNav} ${choosen===1&& style.focus}`} style={{backgroundColor:"#F215B6"}} onClick={()=>handleClick(1)}></div>
                <span>.......</span>
                <div className={`${style.sliderNav} ${choosen===2&& style.focus}`} style={{backgroundColor:"#A6E51C"}} onClick={()=>handleClick(2)}></div>
            </section>
        </section>
        <img key={animate} src={`./banners/${choosen}.png`} className={style.banner} alt="person"  />
        </div>
        </div>}
        </>
  )
}

export default HomeBody