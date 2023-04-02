import { useContext } from "react";
import styled from "styled-components";
import BookmarkContext from "../contexts/BookmarkContext";
import FavoritesOverview from "../components/FavoritesOverview";
import Heading from "../components/Heading";
import Link from "next/link";

const BookmarksPage = () => {
  const { bookmarks, setBookmarks } = useContext(BookmarkContext);

  const handleBookmark = (item) => {
    const index = bookmarks.findIndex((b) => b._id === item._id);
    if (index !== -1) {
      const newBookmarks = [...bookmarks];
      newBookmarks.splice(index, 1);
      setBookmarks(newBookmarks);
    }
  };

  return (
    <>
      <Heading>Favorites</Heading>
      <Link href="/">
        <button>🔙</button>
      </Link>
      <StyledPage>
        <FavoritesOverview
          bookmarks={bookmarks}
          handleBookmark={handleBookmark}
        />
      </StyledPage>
    </>
  );
};

export default BookmarksPage;

const StyledPage = styled.div`
  margin-bottom: 120px;
`;
