import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";
import Card from "../Card.js";
import SearchBar from "../SearchBar/index.js";

const fetcher = (url) => fetch(url).then((res) => res.json());

const normalizeText = (text) => {
  return text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
};

export default function MovieList() {
  const [searchText, setSearchText] = useState("");
  const { data: movies, error } = useSWR("/api/movies", fetcher);

  if (error) {
    return <div>Failed to load from API</div>;
  }
  if (!movies) {
    return <div>Loading...</div>;
  }

  const filteredMovies = movies.filter((movie) =>
    normalizeText(movie.title).includes(normalizeText(searchText))
  );

  return (
    <>
      <SearchBar onSearch={setSearchText} />
      <StyledCardContainer>
        {filteredMovies
          .sort((a, b) => a.id - b.id)
          .map((movie) => (
            <>
              <Link href={`/${movie.title.replace(/ /g, "-")}`}>
                <Card
                  key={movie.id}
                  title={movie.title}
                  date={movie.release_date}
                  image={movie.cover_url}
                />
              </Link>
            </>
          ))
          .reverse()}
      </StyledCardContainer>
    </>
  );
}

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
