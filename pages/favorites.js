// import { useState, useEffect } from "react";
// import Link from "next/link";
// import styled from "styled-components";
// import Bookmark from "../components/Bookmark";
// import { useContext } from "react";
// import BookmarkContext from "../contexts/BookmarkContext";

// const BookmarksPage = () => {
//   const { bookmarks, setBookmarks } = useContext(BookmarkContext);

//   useEffect(() => {
//     const storedBookmarks = localStorage.getItem("bookmarks");
//     if (storedBookmarks) {
//       const parsedBookmarks = JSON.parse(storedBookmarks);
//       setBookmarks(parsedBookmarks);
//     }
//   }, []);

//   const handleBookmark = (item) => {
//     const index = bookmarks.findIndex((b) => b.id === item.id);
//     if (index !== -1) {
//       const newBookmarks = [...bookmarks];
//       newBookmarks.splice(index, 1);
//       setBookmarks(newBookmarks);
//     }
//   };

//   return (
//     <StyledPage>
//       <h1>Bookmarked Items</h1>
//       <Link href="/">
//         <button>🔙</button>
//       </Link>
//       <ul>
//         {bookmarks.map((item) => (
//           <li key={item.id}>
//             <Link href={`/${item.title.replace(/ /g, "-")}`}>
//               <p>{item.title}</p>
//             </Link>
//             <Bookmark
//               handleBookmark={handleBookmark}
//               item={item}
//               isBookmarked={true}
//             />
//           </li>
//         ))}
//       </ul>
//     </StyledPage>
//   );
// };

// export default BookmarksPage;

// const StyledPage = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import Bookmark from "../components/Bookmark";
import BookmarkContext from "../contexts/BookmarkContext";

const BookmarksPage = () => {
  const { bookmarks, setBookmarks } = useContext(BookmarkContext);

  const handleBookmark = (item) => {
    const index = bookmarks.findIndex((b) => b.id === item.id);
    if (index !== -1) {
      const newBookmarks = [...bookmarks];
      newBookmarks.splice(index, 1);
      setBookmarks(newBookmarks);
    }
  };
  console.log(bookmarks);
  return (
    <StyledPage>
      <h1>Bookmarked Items</h1>
      <Link href="/">
        <button>🔙</button>
      </Link>
      <ul>
        {bookmarks &&
          bookmarks.map((item) => (
            <li key={item.id}>
              <Link href={`/${item.title.replace(/ /g, "-")}`}>
                <p>{item.title}</p>
              </Link>
              <Bookmark
                handleBookmark={handleBookmark}
                item={item}
                isBookmarked={true}
              />
            </li>
          ))}
      </ul>
    </StyledPage>
  );
};

export default BookmarksPage;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
