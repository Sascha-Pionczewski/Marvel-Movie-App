import Image from "next/image";
import Link from "next/link";
import Bookmark from "../Bookmark";
import VideoComponent from "../VideoComponent";
import styled from "styled-components";

export default function MovieDetailsPage({ movie, bookmarks, handleBookmark }) {
  const characterObjects = movie.characters.map((jsonString) =>
    JSON.parse(jsonString)
  );

  return (
    <StyledPage>
      <Link href={"/"}>
        <button>🔙</button>
      </Link>
      <h1>{movie.title}</h1>
      <Bookmark
        handleBookmark={handleBookmark}
        item={movie}
        isBookmarked={bookmarks.findIndex((b) => b._id === movie._id) !== -1}
      />
      <VideoComponent url={movie.trailer_url} />
      <h2>Description:</h2>
      <StyledText>{movie.overview}</StyledText>
      <Image src={movie.cover_url} alt={movie.title} width={200} height={300} />
      <h3>Related Movies</h3>
      <ul>
        {movie.related_movies.map((relMovie) => {
          const titleWithMinus = relMovie.title.replace(/ /g, "-");
          return (
            <Link href={`/${titleWithMinus}`} key={relMovie._id}>
              <li>{relMovie.title}</li>
            </Link>
          );
        })}
      </ul>
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
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

const StyledText = styled.p`
  margin: 30px;
`;
