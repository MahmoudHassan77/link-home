import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import HomeBody from '../../components/HomeBody/HomeBody'
import style from './Home.module.scss'
function Home() {
  return (
      <Container>
        <div className={style.homeContainer}>
        <Header />
        <HomeBody />
        </div>
      </Container>
  )
}

export default Home