import { createContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && bookmarks === undefined) {
      const storedBookmarks = localStorage.getItem("bookmarks");
      if (storedBookmarks) {
        try {
          setBookmarks(JSON.parse(storedBookmarks));
        } catch (error) {
          console.error("Error parsing stored bookmarks:", error);
        }
      } else {
        setBookmarks([]);
      }
    }
  }, [bookmarks]);

  useEffect(() => {
    if (bookmarks !== undefined) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
