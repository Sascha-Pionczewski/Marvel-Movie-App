import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";
import Card from "../Card.js/index.js";
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

  const sortMovies = movies.sort((a, b) => a.id - b.id);

  const filteredMovies = sortMovies.filter((movie) =>
    normalizeText(movie.title).includes(normalizeText(searchText))
  );

  return (
    <>
      <SearchBar onSearch={setSearchText} />
      <StyledHeading>
        <h3>Welcome to the Marvel Movie Universe App!</h3>
        <p>
          Embark on a thrilling adventure through the world of your favorite
          superheroes and villains. Explore the epic stories, iconic characters,
          and stunning visuals that make the Marvel Cinematic Universe a global
          phenomenon.
        </p>
      </StyledHeading>
      <StyledCardContainer>
        {filteredMovies
          .map((movie, index) => (
            <React.Fragment key={movie.id || index}>
              <Link href={`/${movie.title.replace(/ /g, "-")}`}>
                <Card
                  title={movie.title}
                  date={movie.release_date}
                  image={movie.cover_url}
                />
              </Link>
            </React.Fragment>
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

const StyledHeading = styled.div`
  margin: 0 30px;
`;
