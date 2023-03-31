import { useContext } from "react";
import styled from "styled-components";
import BookmarkContext from "../contexts/BookmarkContext";
import FavoritesOverview from "../components/FavoritesOverview";

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
    <FavoritesOverview bookmarks={bookmarks} handleBookmark={handleBookmark} />
  );
};

export default BookmarksPage;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;
