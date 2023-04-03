import Link from "next/link";
import styled from "styled-components";
import Bookmark from "../Bookmark";
import ActorImage from "../ActorImage";
import Heading from "../Heading";

export default function CharacterDetailsPage({
  character,
  bookmarks,
  handleBookmark,
  actorName,
}) {
  return (
    <>
      <Heading>{character.name}</Heading>
      <StyledPage>
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
            return (
              <Link href={`/${titleWithMinus}`} key={index}>
                <li key={index}>{movie}</li>
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
  margin-bottom: 120px;
`;

const StyledText = styled.p`
  margin: 30px;
`;

const CardContainer = styled.div`
  position: relative;
`;
