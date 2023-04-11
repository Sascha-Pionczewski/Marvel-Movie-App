import Link from "next/link";
import Bookmark from "../Bookmark";
import VideoComponent from "../VideoComponent";
import styled from "styled-components";
import FavoritesCard from "../FavoritesCard";
import RelatedMoviesCard from "../RelatedMoviesCard";
import Backbutton from "../Backbutton";
import ActorImageSmall from "../ActorImageSmall";
import Rating from "../Rating";

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
          <StyledDiv>
            <Rating movieId={movie._id} />
          </StyledDiv>
          <p>{movie.overview}</p>
        </StyledDescription>
        <CardContainer>
          <Bookmark
            handleBookmark={handleBookmark}
            item={movie}
            isBookmarked={
              bookmarks?.findIndex((b) => b._id === movie._id) !== -1
            }
          />
          <FavoritesCard image={movie.cover_url} title={movie.title} />
        </CardContainer>
        <h3>Related Movies</h3>
        <RelatedMoviesContainer>
          {movie.related_movies.map((relMovie, index) => {
            const titleWithMinus = relMovie.title.replace(/ /g, "-");
            return (
              <Link href={`/${titleWithMinus}`} key={index}>
                <RelatedMoviesCard
                  image={relMovie.cover_url}
                  title={relMovie.title}
                />
              </Link>
            );
          })}
        </RelatedMoviesContainer>
        <h3>Characters</h3>
        <RelatedMoviesContainer>
          {characterObjects.map((character, index) => {
            const nameWithMinus = character.name
              .replace(/ /g, "-")
              .replace("/", "");
            const foundCharacter = charactersIn.find(
              (c) => c.name === character.name
            );

            const actorName = foundCharacter ? foundCharacter.actor : "";
            return (
              <Link href={`/${nameWithMinus}`} key={index}>
                <ActorImageSmall actorName={actorName} />
              </Link>
            );
          })}
        </RelatedMoviesContainer>
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

const StyledDiv = styled.div`
  position: relative;
`;
