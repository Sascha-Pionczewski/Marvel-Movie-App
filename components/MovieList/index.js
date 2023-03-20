import React from "react";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MovieList() {
  const { data: movies, error } = useSWR(
    "https://mcuapi.herokuapp.com/api/v1/movies",
    fetcher
  );

  if (error) {
    return <div>Failed to load from API</div>;
  }
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {movies.data
        .map((movie) => (
          <li key={movie._id}>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <Image
              src={movie.cover_url}
              height={300}
              width={200}
              alt={movie.title}
            />
          </li>
        ))
        .reverse()}
    </ul>
  );
}
