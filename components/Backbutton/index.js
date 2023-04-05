import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Backbutton() {
  const router = useRouter();
  return (
    <StyledButton type="button" onClick={() => router.back()}>
      <Image
        src="/left-arrow-back-svgrepo-com.svg"
        alt="back"
        width={30}
        height={30}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 0px;
`;
