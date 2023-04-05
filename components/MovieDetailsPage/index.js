import Link from "next/link";
import Bookmark from "../Bookmark";
import VideoComponent from "../VideoComponent";
import styled from "styled-components";
import Card from "../Card.js";
import RelatedMoviesCard from "../RelatedMoviesCard";
import Backbutton from "../Backbutton";
import ActorImage from "../ActorImage";

export default function MovieDetailsPage({
  movie,
  bookmarks,
  handleBookmark,
  charactersIn,
}) {
  const characterObjects = movie.characters.map((jsonString) =>
    JSON.parse(jsonString)
  );

  return (
    <>
      <StyledPageContainer>
        <VideoComponent url={movie.trailer_url} />
        <StyledDescription>
          <Backbutton />
          <h2>Description:</h2>
          <p>{movie.overview}</p>
        </StyledDescription>
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
            const foundCharacter = charactersIn.find(
              (c) => c.name === character.name
            );

            const actorName = foundCharacter ? foundCharacter.actor : "";
            return (
              <Link href={`/${nameWithMinus}`} key={character._id}>
                <ActorImage actorName={actorName} />
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

const CardContainer = styled.div`
  position: relative;
`;

const RelatedMoviesContainer = styled.ul`
  list-style: none;
  margin: 0px 10px;
  padding: 0px;
  width: 350px;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 320px;
`;
