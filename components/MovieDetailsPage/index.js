import Image from "next/image";
import Link from "next/link";
import Bookmark from "../Bookmark";
import VideoComponent from "../VideoComponent";
import styled from "styled-components";
import Card from "../Card.js";
import RelatedMoviesCard from "../RelatedMoviesCard";

export default function MovieDetailsPage({ movie, bookmarks, handleBookmark }) {
  const characterObjects = movie.characters.map((jsonString) =>
    JSON.parse(jsonString)
  );

  return (
    <>
      <StyledPageContainer>
        <VideoComponent url={movie.trailer_url} />
        <h2>Description:</h2>
        <StyledText>{movie.overview}</StyledText>

        <CardContainer>
          <Bookmark
            handleBookmark={handleBookmark}
            item={movie}
            isBookmarked={
              bookmarks.findIndex((b) => b._id === movie._id) !== -1
            }
          />
          <Card image={movie.cover_url} title={movie.title} />
        </CardContainer>
        <h3>Related Movies</h3>
        <RelatedMoviesContainer>
          {movie.related_movies.map((relMovie) => {
            const titleWithMinus = relMovie.title.replace(/ /g, "-");
            return (
              <Link href={`/${titleWithMinus}`} key={relMovie._id}>
                <RelatedMoviesCard
                  image={relMovie.cover_url}
                  title={relMovie.title}
                />
              </Link>
            );
          })}
        </RelatedMoviesContainer>
        <h3>Characters</h3>
        <ul>
          {characterObjects.map((character) => {
            const nameWithMinus = character.name
              .replace(/ /g, "-")
              .replace("/", "");
            return (
              <Link href={`/${nameWithMinus}`} key={character._id}>
                <li>{character.name}</li>
              </Link>
            );
          })}
        </ul>
      </StyledPageContainer>
    </>
  );
}

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

const StyledText = styled.p`
  margin: 0px 30px;
`;

const CardContainer = styled.div`
  position: relative;
`;

const RelatedMoviesContainer = styled.ul`
  list-style: none;
  margin: 0px 10px;
  padding: 0px;
  width: 350px;
`;
