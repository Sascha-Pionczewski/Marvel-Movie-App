import Heading from "../components/Heading";
import MovieList from "../components/MovieList";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Heading>Marvel Movie App</Heading>
      <StyledDiv>
        <MovieList />
      </StyledDiv>
    </main>
  );
}

const StyledDiv = styled.div`
  margin-bottom: 80px;
`;
