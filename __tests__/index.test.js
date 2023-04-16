import Home from "../pages";
import BookmarksPage from "../pages/favorites";
import { RouterContext } from "next/dist/shared/lib/router-context";
import BookmarkContext from "../contexts/BookmarkContext";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import NextRouterMock from "next-router-mock";

// Component Tests

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

// Unit Test

describe("SearchBar", () => {
  test("calls onSearch when the input value changes", () => {
    const onSearch = jest.fn();
    render(<SearchBar value="" onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("search for movies...");
    fireEvent.change(input, { target: { value: "test" } });

    expect(onSearch).toHaveBeenCalledWith("test");
  });
});
