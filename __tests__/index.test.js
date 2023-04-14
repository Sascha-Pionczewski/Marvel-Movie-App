import Home from "../pages";
import BookmarksPage from "../pages/favorites";
import { RouterContext } from "next/dist/shared/lib/router-context";
import BookmarkContext from "../contexts/BookmarkContext";
import { render, screen } from "@testing-library/react";
import NextRouterMock from "next-router-mock";

test("is rendered Home", () => {
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /marvel movie app/i,
  });
  expect(element).toBeInTheDocument();
});

test("is rendered BookmarksPage", () => {
  const mockBookmarks = [];
  const mockAddBookmark = jest.fn();
  const mockRemoveBookmark = jest.fn();

  render(
    <RouterContext.Provider value={NextRouterMock}>
      <BookmarkContext.Provider
        value={{
          bookmarks: mockBookmarks,
          addBookmark: mockAddBookmark,
          removeBookmark: mockRemoveBookmark,
        }}
      >
        <BookmarksPage />
      </BookmarkContext.Provider>
    </RouterContext.Provider>
  );

  const element = screen.getByRole("heading", {
    name: /favorites/i,
  });
  expect(element).toBeInTheDocument();
});
