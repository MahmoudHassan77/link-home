import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import HomeBody from '../../components/HomeBody/HomeBody'
import style from './Home.module.scss'
function Home() {
  return (
      <Container className="mb-2">
        <Header />
        <HomeBody />
      </Container>
  )
}

export default Home