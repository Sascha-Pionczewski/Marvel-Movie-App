import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MovieList() {
  const { data: movies, error } = useSWR("/api/movies", fetcher);
  if (error) {
    return <div>Failed to load from API</div>;
  }
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <StyledCard>
      {movies
        .sort((a, b) => a.id - b.id)
        .map((movie) => (
          <>
            <div>
              <Link href={`/${movie.title.replace(/ /g, "-")}`} key={movie.id}>
                <h2>{movie.title}</h2>
              </Link>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <Link href={`/${movie.title.replace(/ /g, "-")}`}>
                <Image
                  src={movie.cover_url}
                  height={300}
                  width={200}
                  alt={movie.title}
                />
              </Link>
            </div>
          </>
        ))
        .reverse()}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;
