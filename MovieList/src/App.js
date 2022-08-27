import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  // const fetchMoviesHandler = () => {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((movieList) => {
  //         return {
  //           id: movieList.episode_id,
  //           title: movieList.title,
  //           release: movieList.release_date,
  //           openingText: movieList.opening_crawl,
  //         };
  //       });
  //       setMovies(transformedData);
  //     });
  // };

  const [moviesState, setMoviesState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (moviesState === false) return;

    try {
      setIsLoading(true);
      fetch("https://swapi.dev/api/film")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error hai bhai ****");
          }
          return response.json();
        })
        .then((data) => {
          const transformedData = data.results.map((movieList) => {
            return {
              id: movieList.episode_id,
              title: movieList.title,
              release: movieList.release_date,
              openingText: movieList.opening_crawl,
            };
          });
          setMovies(transformedData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
          setIsLoading(false);
        });
    } catch (error) {
      console.log("ADFsdf", error);
      setError(error.message);
      setIsLoading(false);
    }
  }, [moviesState]);

  const setMoviesStateHandler = () => {
    setMoviesState(true);
    setTimeout(() => {
      setMoviesState(false);
    }, 300);
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={setMoviesStateHandler}> Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
