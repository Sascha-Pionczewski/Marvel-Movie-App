import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Bookmark() {
  const [bookmarked, setBookmarked] = useState(false);

  function handleClick() {
    setBookmarked(!bookmarked);
  }

  if (bookmarked) {
    return (
      <StyledButton onClick={handleClick}>
        <Image
          src="/star-svgrepo-com (2).svg"
          alt="bookmark"
          width={40}
          height={60}
        />
      </StyledButton>
    );
  }
  if (!bookmarked) {
    return (
      <StyledButton onClick={handleClick}>
        <Image
          src="/star-1-svgrepo-com.svg"
          alt="bookmark"
          width={40}
          height={60}
        />
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;
