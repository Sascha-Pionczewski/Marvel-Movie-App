import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

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
    <div>
      {movies.data
        .map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <Image
              src={movie.cover_url}
              height={300}
              width={200}
              alt={movie.title}
            />
          </Link>
        ))
        .reverse()}
    </div>
  );
}
