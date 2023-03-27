import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Settings() {
  return (
    <StyledPage>
      <Image src="/pngwing.com.png" width={500} height={500} alt="iron man" />
      <h2>coming soon...!</h2>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
