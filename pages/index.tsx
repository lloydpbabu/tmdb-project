import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Card from '../components/Card/Card'
import Grid from '../components/Grid/Grid'
import Spinner from '../components/Spinner/Spinner'
import { useState } from 'react'
import { useFetchMovies } from '../api/fetchHooks'


const Home: NextPage = () => {
  const [query, setQuery] = useState('');

  const {data, fetchNextPage, isLoading, isFetching, error} = useFetchMovies(query);

  console.log("data:",data);

  return (
   <main>
    <Header setQuery={setQuery}/>
    <Hero />
    <Grid />
    <Card />
    <Spinner />
   </main>
  )
}

export default Home
