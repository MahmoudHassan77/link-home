import React from 'react'
import ThingsList from '../../components/ThingsList/ThingsList';
import style from "./ThingsWeDo.module.scss"

function ThingsWeDo() {
  return (
      <div className={style.thingsContainer} id="aboutPage">
          <section className={style.leftSection}>
            <ThingsList />
          </section>
          <section className={style.rightSection}>
              <h1 className={style.title}>We Deliver Digital Productivity</h1>
              <p className={style.des}>We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners.</p>
          </section>
      </div>
  )
}

export default ThingsWeDo;


