import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NewsHeader from '../../components/NewsHeader/NewsHeader'
import NewsList from '../../components/NewsList/NewsList';
import { NewsContext } from '../../context/NewsContext'
import useFetch from '../../hooks/useFetch';


function News() {
  const [activeTab, setActiveTab] = useState(0);
  const {data} = useFetch({},"91298d970c27e9a06518");
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
      setCategories(data?.newsCategory);
  },[data]);
  const handleClick =(id)=>{
    setActiveTab(id)
}
  return (
    <Container>
      <NewsContext.Provider value={{activeTab, handleClick, categories}}>
        <NewsHeader />
        <NewsList />
      </NewsContext.Provider>
    </Container>
  )
}

export default News