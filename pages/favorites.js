import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import Bookmark from "../components/Bookmark";
import BookmarkContext from "../contexts/BookmarkContext";
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
    <StyledPage>
      <h1>Favorites</h1>
      <Link href="/">
        <button>🔙</button>
      </Link>
      <ul>
        {bookmarks &&
          bookmarks.map((item) => {
            if (!item || (!item.title && !item.name)) {
              return null;
            }

            const itemName = item.title || item.name;
            const linkPath = `/${itemName.replace(/ /g, "-").replace("/", "")}`;

            if (item.cover_url) {
              return (
                <li key={item._id}>
                  <Link href={linkPath}>
                    <p>{itemName}</p>
                  </Link>
                  <Bookmark
                    handleBookmark={handleBookmark}
                    item={item}
                    isBookmarked={true}
                  />
                  <Image
                    src={item.cover_url}
                    alt={itemName}
                    width={200}
                    height={300}
                  />
                </li>
              );
            }
            if (!item.cover_url) {
              return (
                <li key={item._id}>
                  <Link href={linkPath}>
                    <p>{itemName}</p>
                  </Link>
                  <Bookmark
                    handleBookmark={handleBookmark}
                    item={item}
                    isBookmarked={true}
                  />
                </li>
              );
            }
          })}
      </ul>
    </StyledPage>
  );
};

export default BookmarksPage;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;
