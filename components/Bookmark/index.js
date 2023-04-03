import Image from "next/image";
import styled from "styled-components";

export default function Bookmark({ handleBookmark, item, isBookmarked }) {
  function handleClick() {
    handleBookmark(item);
  }

  return (
    <StyledImage
      src={
        isBookmarked ? "/star-svgrepo-com (3).svg" : "/star-1-svgrepo-com.svg"
      }
      alt="bookmark"
      width={40}
      height={40}
      onClick={handleClick}
    />
  );
}

const StyledImage = styled(Image)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
