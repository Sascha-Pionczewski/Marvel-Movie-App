import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Favorites() {
  return (
    <StyledPage>
      <Image src="/pngwing.com (1).png" width={300} height={500} alt="groot" />
      <h2>coming soon...</h2>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
