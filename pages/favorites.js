import { useContext } from "react";
import styled from "styled-components";
import BookmarkContext from "../contexts/BookmarkContext";
import FavoritesOverview from "../components/FavoritesOverview";
import Heading from "../components/Heading";
import Link from "next/link";
import Image from "next/image";

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
        <StyledImage
          src="/left-arrow-back-svgrepo-com.svg"
          alt="back"
          width={30}
          height={30}
        />
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

const StyledImage = styled(Image)`
  margin-left: 10px;
  margin-top: -10px;
`;
