import Link from "next/link";
import styled from "styled-components";
import Bookmark from "../Bookmark";
import ActorImage from "../ActorImage";
import Heading from "../Heading";
import Backbutton from "../Backbutton";
import Image from "next/image";

export default function CharacterDetailsPage({
  character,
  bookmarks,
  handleBookmark,
  actorName,
  movieIn,
}) {
  return (
    <>
      <Heading>{character.name}</Heading>
      <StyledPage>
        <Backbutton />
        <CardContainer>
          <Bookmark
            handleBookmark={handleBookmark}
            item={character}
            isBookmarked={
              bookmarks.findIndex((b) => b._id === character._id) !== -1
            }
          />
          <ActorImage actorName={actorName} />
        </CardContainer>

        <h3>Description:</h3>
        <StyledText>{character.description}</StyledText>
        <h3>Skills:</h3>
        <ul>
          {character.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h3>Other Films:</h3>
        <ul>
          {character.movies.map((movie, index) => {
            const titleWithMinus = movie.replace(/ /g, "-");
            const foundMovie = movieIn.find((m) => m.title === movie);
            const coverUrl = foundMovie ? foundMovie.cover_url : "";
            return (
              <Link href={`/${titleWithMinus}`} key={index}>
                <Image src={coverUrl} alt={movie} width={110} height={170} />
              </Link>
            );
          })}
        </ul>
      </StyledPage>
    </>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
`;

const StyledText = styled.p`
  margin: 30px;
`;

const CardContainer = styled.div`
  position: relative;
`;
