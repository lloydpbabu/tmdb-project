import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Spinner from "../components/Spinner/Spinner";
import { useState } from "react";
import { useFetchMovies } from "../api/fetchHooks";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log("data:", data);

  return (
    <main>
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data?.pages[0].results[0]?.backdrop_path
              : "/no_image.jpg"
          }
          title={data?.pages[0].results[0]?.title}
          text={data?.pages[0].results[0]?.overview}
        />
      ) : null}
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : "Popular Movies"
        }
      >
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <div key={movie.id}>
                  <Card imgUrl={movie.poster_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : '/no_image.jpg'} title={movie.original_title}/>
                </div>
              ))
            )
          : null}
      </Grid>
      
      <Spinner />
    </main>
  );
};

export default Home;
