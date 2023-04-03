import Link from "next/link";
import styled from "styled-components";
import Bookmark from "../Bookmark";
import Card from "../Card.js";

export default function FavoritesOverview({ bookmarks, handleBookmark }) {
  return (
    <>
      <StyledList>
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
                  <CardContainer>
                    <Bookmark
                      handleBookmark={handleBookmark}
                      item={item}
                      isBookmarked={true}
                    />
                    <Link href={linkPath}>
                      <Card title={itemName} image={item.cover_url} />
                    </Link>
                  </CardContainer>
                </li>
              );
            }
            if (!item.cover_url) {
              return (
                <li key={item._id}>
                  <CardContainer>
                    <Bookmark
                      handleBookmark={handleBookmark}
                      item={item}
                      isBookmarked={true}
                    />
                    <Link href={linkPath}>
                      <p>{itemName}</p>
                    </Link>
                  </CardContainer>
                </li>
              );
            }
          })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  align-items: center;
`;

const CardContainer = styled.div`
  position: relative;
  display: inline-block;
`;
