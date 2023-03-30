import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import VideoComponent from "../components/VideoComponent";
import Image from "next/image";
import styled from "styled-components";
import Bookmark from "../components/Bookmark";
import { useContext } from "react";
import BookmarkContext from "../contexts/BookmarkContext";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: movies, error } = useSWR(`/api/movies`, fetcher);
  const { data: characters, error2 } = useSWR(`/api/characters`, fetcher);

  const { bookmarks, setBookmarks } = useContext(BookmarkContext);

  const handleBookmark = (item) => {
    const index = bookmarks.findIndex((b) => b._id === item._id);
    if (index === -1) {
      setBookmarks([...bookmarks, item]);
    } else {
      const newBookmarks = [...bookmarks];
      newBookmarks.splice(index, 1);
      setBookmarks(newBookmarks);
    }
  };

  if (error || error2) {
    return <div>Failed to load from API</div>;
  }
  if (!movies || !characters) {
    return <div>Loading...</div>;
  }

  const movie = movies.find((movie) => movie.title.replace(/ /g, "-") === id);
  const character = characters.find(
    (character) => character.name.replace(/ /g, "-").replace("/", "") === id
  );

  if (movie) {
    const characterObjects = (movie.characters || []).map((jsonString) =>
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
        <Image
          src={movie.cover_url}
          alt={movie.title}
          width={200}
          height={300}
        />
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
  } else if (character) {
    return (
      <StyledPage>
        <Link href="/">
          <button>🔙</button>
        </Link>
        <h1>{character.name}</h1>
        <Bookmark
          handleBookmark={handleBookmark}
          item={character}
          isBookmarked={
            bookmarks.findIndex((b) => b._id === character._id) !== -1
          }
        />
        <h3>Actor:</h3>
        <p>{character.actor}</p>
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
    );
  } else {
    return (
      <StyledText>
        <h1>Oh my! No matching movie or character object found.</h1>
      </StyledText>
    );
  }
};

export default DetailsPage;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

const StyledText = styled.p`
  margin: 30px;
`;
