import styled from "styled-components";

export default function RelatedMoviesCard({ title, image }) {
  return <CardImage src={image} alt={title} />;
}

const CardImage = styled.img`
  width: 110px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 3px;
`;
