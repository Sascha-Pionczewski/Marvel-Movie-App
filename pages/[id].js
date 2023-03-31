import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { useContext } from "react";
import BookmarkContext from "../contexts/BookmarkContext";
import MovieDetailsPage from "../components/MovieDetailsPage";
import CharacterDetailsPage from "../components/CharacterDetailsPage";

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
    return (
      <MovieDetailsPage
        movie={movie}
        bookmarks={bookmarks}
        handleBookmark={handleBookmark}
      />
    );
  } else if (character) {
    return (
      <CharacterDetailsPage
        character={character}
        bookmarks={bookmarks}
        handleBookmark={handleBookmark}
      />
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

const StyledText = styled.p`
  margin: 30px;
`;
