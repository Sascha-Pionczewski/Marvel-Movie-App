import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Bookmark({ handleBookmark, item, isBookmarked }) {
  function handleClick() {
    handleBookmark(item);
  }

  return (
    <StyledButton onClick={handleClick}>
      <Image
        src={
          isBookmarked ? "/star-svgrepo-com (2).svg" : "/star-1-svgrepo-com.svg"
        }
        alt="bookmark"
        width={40}
        height={60}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;
