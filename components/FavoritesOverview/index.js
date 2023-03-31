import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Bookmark from "../Bookmark";

export default function FavoritesOverview({ bookmarks, handleBookmark }) {
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
