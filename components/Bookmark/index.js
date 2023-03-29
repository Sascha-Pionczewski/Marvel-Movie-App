// import React, { useState } from "react";
// import Image from "next/image";
// import styled from "styled-components";

// export default function Bookmark({ handleBookmark, item }) {
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   function handleClick() {
//     setIsBookmarked(!isBookmarked);
//     handleBookmark(item);
//   }

//   if (isBookmarked) {
//     return (
//       <StyledButton onClick={handleClick}>
//         <Image
//           src="/star-svgrepo-com (2).svg"
//           alt="bookmark"
//           width={40}
//           height={60}
//         />
//       </StyledButton>
//     );
//   }
//   if (!isBookmarked) {
//     return (
//       <StyledButton onClick={handleClick}>
//         <Image
//           src="/star-1-svgrepo-com.svg"
//           alt="bookmark"
//           width={40}
//           height={60}
//         />
//       </StyledButton>
//     );
//   }
// }

// const StyledButton = styled.button`
//   border: none;
//   background-color: white;
// `;

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
